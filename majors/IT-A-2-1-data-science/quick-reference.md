# IT-A-2-1 数据科学专业快速参考

> **专业代码**：IT-A-2-1
> **用途**：为 Agent 提供数据科学任务的具体执行指南、代码模板和最佳实践
> **适用技能**：SK-IT-017 至 SK-IT-021

---

## 🔄 标准数据分析工作流

### 六步分析法

```
1. 数据加载 → 2. 数据探索 → 3. 数据清洗 → 4. 数据分析 → 5. 数据可视化 → 6. 结论与建议
```

---

## 📊 步骤1：数据加载

### 代码模板

```python
import pandas as pd
import numpy as np

# 加载数据
df = pd.read_csv('data.csv', encoding='utf-8')  # CSV文件
# df = pd.read_excel('data.xlsx')  # Excel文件
# df = pd.read_json('data.json')  # JSON文件

# 基本信息查看
print(f"数据形状: {df.shape}")  # 行数、列数
print(f"\n数据类型:\n{df.dtypes}")  # 列数据类型
print(f"\n前5行数据:\n{df.head()}")  # 前5行
print(f"\n缺失值统计:\n{df.isnull().sum()}")  # 缺失值统计
print(f"\n基本统计:\n{df.describe()}")  # 数值列统计
```

### 注意事项
- ⚠️ 检查编码格式（常见：utf-8、gbk、gb2312）
- ⚠️ 检查日期列是否正确解析
- ⚠️ 检查分类列是否需要转换为 category 类型

---

## 🧹 步骤2：数据探索

### 代码模板

```python
# 数值列分布
for col in df.select_dtypes(include=[np.number]).columns:
    print(f"\n{col} 统计信息:")
    print(f"  均值: {df[col].mean():.2f}")
    print(f"  中位数: {df[col].median():.2f}")
    print(f"  标准差: {df[col].std():.2f}")
    print(f"  最小值: {df[col].min()}")
    print(f"  最大值: {df[col].max()}")

# 分类列分布
for col in df.select_dtypes(include=['object', 'category']).columns:
    print(f"\n{col} 分布:")
    print(df[col].value_counts())
```

---

## 🧽 步骤3：数据清洗检查清单

### 5类常见问题

#### 1. 缺失值处理
```python
# 检查缺失值
missing = df.isnull().sum()
missing_pct = (missing / len(df)) * 100
print("缺失值统计:")
print(pd.DataFrame({'数量': missing, '占比(%)': missing_pct}))

# 处理方法选择
# 方案1: 删除缺失值（缺失比例 < 5%）
df = df.dropna()

# 方案2: 填充缺失值
df['numeric_col'].fillna(df['numeric_col'].median(), inplace=True)  # 数值列用中位数
df['category_col'].fillna(df['category_col'].mode()[0], inplace=True)  # 分类列用众数

# 方案3: 标记缺失值
df['is_missing'] = df['col'].isnull().astype(int)
```

#### 2. 重复值处理
```python
# 检查重复值
duplicates = df.duplicated().sum()
print(f"重复值数量: {duplicates}")

# 删除重复值
df = df.drop_duplicates()
```

#### 3. 异常值检测
```python
# 使用IQR方法检测异常值
def detect_outliers(df, col):
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    outliers = df[(df[col] < lower_bound) | (df[col] > upper_bound)]
    return outliers

for col in df.select_dtypes(include=[np.number]).columns:
    outliers = detect_outliers(df, col)
    if len(outliers) > 0:
        print(f"\n{col} 发现 {len(outliers)} 个异常值")
```

#### 4. 数据类型转换
```python
# 日期列转换
df['date_col'] = pd.to_datetime(df['date_col'])

# 分类列转换
df['category_col'] = df['category_col'].astype('category')

# 数值列转换（处理字符串格式的数字）
df['numeric_col'] = pd.to_numeric(df['numeric_col'], errors='coerce')
```

#### 5. 数据标准化
```python
# Min-Max 标准化
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
df_normalized = pd.DataFrame(scaler.fit_transform(df[numerical_cols]),
                            columns=numerical_cols)

# Z-score 标准化
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
df_standardized = pd.DataFrame(scaler.fit_transform(df[numerical_cols]),
                              columns=numerical_cols)
```

---

## 🔍 步骤4：数据分析

### 常见分析场景

#### 场景1：趋势分析
```python
# 按时间聚合数据
df['date'] = pd.to_datetime(df['date'])
df_trend = df.groupby(df['date'].dt.to_period('M')).agg({
    'sales': 'sum',
    'orders': 'count'
}).reset_index()

print("月度趋势:")
print(df_trend)
```

#### 场景2：对比分析
```python
# 按类别分组统计
df_grouped = df.groupby('category').agg({
    'sales': ['sum', 'mean', 'count']
}).round(2)

print("类别对比:")
print(df_grouped)
```

#### 场景3：相关性分析
```python
# 计算相关系数矩阵
correlation = df.select_dtypes(include=[np.number]).corr()

print("相关性矩阵:")
print(correlation)
```

#### 场景4：Top N 分析
```python
# Top 10 产品
top_products = df.groupby('product')['sales'].sum().sort_values(ascending=False).head(10)

print("Top 10 产品:")
print(top_products)
```

---

## 📈 步骤5：数据可视化

### 图表选择指南

| 分析目的 | 推荐图表 | Seaborn 函数 |
|----------|----------|--------------|
| 趋势变化 | 折线图 | `sns.lineplot()` |
| 数值对比 | 柱状图 | `sns.barplot()` |
| 分布展示 | 直方图 | `sns.histplot()` |
| 类别分布 | 条形图 | `sns.countplot()` |
| 相关性 | 散点图 | `sns.scatterplot()` |
| 相关性矩阵 | 热力图 | `sns.heatmap()` |
| 多变量关系 | 箱线图 | `sns.boxplot()` |
| 分布对比 | 小提琴图 | `sns.violinplot()` |

### 可视化代码模板

#### 模板1：趋势折线图
```python
import matplotlib.pyplot as plt
import seaborn as sns

# 设置样式
sns.set_style("whitegrid")
plt.figure(figsize=(12, 6))

# 绘制折线图
sns.lineplot(data=df_trend, x='date', y='sales', marker='o', linewidth=2)

# 添加标题和标签
plt.title('2024年月度销售趋势', fontsize=16, pad=20)
plt.xlabel('月份', fontsize=12)
plt.ylabel('销售额', fontsize=12)

# 优化坐标轴
plt.xticks(rotation=45)
plt.tight_layout()

# 保存图表
plt.savefig('sales_trend.png', dpi=300, bbox_inches='tight')
plt.show()
```

#### 模板2：类别对比柱状图
```python
plt.figure(figsize=(12, 6))

# 绘制柱状图
ax = sns.barplot(data=df_grouped.reset_index(),
                 x='category',
                 y=('sales', 'sum'),
                 palette='viridis')

# 添加数值标签
for p in ax.patches:
    ax.annotate(f'{p.get_height():,.0f}',
                (p.get_x() + p.get_width() / 2., p.get_height()),
                ha='center', va='center',
                xytext=(0, 5),
                textcoords='offset points')

plt.title('各类别销售总额对比', fontsize=16, pad=20)
plt.xlabel('类别', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('category_comparison.png', dpi=300, bbox_inches='tight')
plt.show()
```

#### 模板3：相关性热力图
```python
plt.figure(figsize=(10, 8))

# 绘制热力图
sns.heatmap(correlation,
            annot=True,           # 显示数值
            fmt='.2f',           # 数值格式
            cmap='coolwarm',      # 配色方案
            center=0,            # 中心值
            linewidths=1,        # 线宽
            annot_kws={'size': 10})

plt.title('变量相关性矩阵', fontsize=16, pad=20)
plt.tight_layout()
plt.savefig('correlation_heatmap.png', dpi=300, bbox_inches='tight')
plt.show()
```

#### 模板4：多图表组合
```python
fig, axes = plt.subplots(2, 2, figsize=(15, 12))

# 子图1：趋势图
sns.lineplot(data=df_trend, x='date', y='sales', ax=axes[0, 0])
axes[0, 0].set_title('销售趋势', fontsize=14)
axes[0, 0].tick_params(axis='x', rotation=45)

# 子图2：类别分布
sns.barplot(data=df_grouped.reset_index(),
            x='category',
            y=('sales', 'sum'),
            palette='viridis',
            ax=axes[0, 1])
axes[0, 1].set_title('类别分布', fontsize=14)
axes[0, 1].tick_params(axis='x', rotation=45)

# 子图3：数值分布
sns.histplot(df['sales'], bins=30, kde=True, ax=axes[1, 0])
axes[1, 0].set_title('销售额分布', fontsize=14)

# 子图4：箱线图
sns.boxplot(data=df, x='category', y='sales', ax=axes[1, 1])
axes[1, 1].set_title('各类别销售额分布', fontsize=14)
axes[1, 1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.savefig('multi_charts.png', dpi=300, bbox_inches='tight')
plt.show()
```

---

## 📝 步骤6：结论与建议

### 分析报告模板

```markdown
# 数据分析报告

## 1. 数据概览
- 数据量：XX 行，XX 列
- 时间范围：YYYY-MM-DD 至 YYYY-MM-DD
- 数据质量：经过清洗，无缺失值和异常值

## 2. 主要发现

### 2.1 趋势分析
- 发现：销售额呈现上升趋势/下降趋势/波动趋势
- 数据：Q1增长XX%，Q2增长XX%
- 原因：可能的解释

### 2.2 类别分析
- Top类别：类别A（XX%）、类别B（XX%）
- 增长最快：类别C（XX%）
- 潜力类别：类别D（基数小但增长快）

### 2.3 相关性分析
- 强相关变量：X和Y（相关系数：0.85）
- 弱相关变量：X和Z（相关系数：0.23）

## 3. 建议与行动
1. 短期建议：针对发现的问题提出1-2个短期可执行的建议
2. 长期建议：基于趋势提出1-2个长期战略建议
3. 深入分析：需要进一步分析的方向

## 4. 附录
- 完整数据表
- 图表文件
- 代码文件
```

---

## ✅ 代码规范最佳实践

### 1. 变量命名规范
```python
# ✅ 好的命名
sales_data = pd.read_csv('sales.csv')
monthly_trend = df.groupby('month')['sales'].sum()
top_10_products = df.sort_values('sales', ascending=False).head(10)

# ❌ 不好的命名
data = pd.read_csv('sales.csv')
t = df.groupby('month')['sales'].sum()
x = df.sort_values('sales', ascending=False).head(10)
```

### 2. 代码注释规范
```python
# 单行注释：简短说明
df = df.dropna()  # 删除缺失值

# 多行注释：复杂逻辑说明
"""
数据清洗步骤：
1. 删除缺失值超过20%的列
2. 填充数值列缺失值为中位数
3. 填充分类列缺失值为众数
4. 删除重复行
"""
```

### 3. 函数封装规范
```python
def load_and_clean_data(file_path, missing_threshold=0.2):
    """
    加载并清洗数据

    参数:
        file_path (str): 数据文件路径
        missing_threshold (float): 缺失值阈值，超过则删除列

    返回:
        pd.DataFrame: 清洗后的数据框
    """
    df = pd.read_csv(file_path)

    # 删除缺失值过多的列
    df = df.loc[:, df.isnull().mean() < missing_threshold]

    # 填充缺失值
    for col in df.select_dtypes(include=[np.number]).columns:
        df[col].fillna(df[col].median(), inplace=True)
    for col in df.select_dtypes(include=['object']).columns:
        df[col].fillna(df[col].mode()[0], inplace=True)

    return df
```

---

## 🔧 常用工具函数

### 工具1：数据概览函数
```python
def data_overview(df):
    """快速查看数据概览"""
    print(f"数据形状: {df.shape}")
    print(f"\n数据类型:\n{df.dtypes}")
    print(f"\n缺失值:\n{df.isnull().sum()}")
    print(f"\n重复值: {df.duplicated().sum()}")
    print(f"\n数值统计:\n{df.describe()}")
```

### 工具2：缺失值可视化函数
```python
import seaborn as sns
import matplotlib.pyplot as plt

def plot_missing_values(df):
    """可视化缺失值"""
    plt.figure(figsize=(10, 6))
    sns.heatmap(df.isnull(), cbar=False, cmap='viridis')
    plt.title('缺失值分布')
    plt.show()
```

### 工具3：自动探索函数
```python
def auto_explore(df, max_categories=10):
    """自动数据探索"""
    for col in df.columns:
        print(f"\n{'='*50}")
        print(f"列名: {col}")
        print(f"数据类型: {df[col].dtype}")
        print(f"缺失值: {df[col].isnull().sum()} ({df[col].isnull().sum()/len(df)*100:.2f}%)")

        if df[col].dtype in [np.int64, np.float64]:
            print(f"均值: {df[col].mean():.2f}")
            print(f"中位数: {df[col].median():.2f}")
            print(f"标准差: {df[col].std():.2f}")
        elif df[col].dtype == 'object':
            print(f"唯一值数量: {df[col].nunique()}")
            print(f"\n值分布:")
            print(df[col].value_counts().head(max_categories))
```

---

## 📚 推荐资源

### 官方文档
- Pandas: https://pandas.pydata.org/docs/
- NumPy: https://numpy.org/doc/
- Matplotlib: https://matplotlib.org/stable/contents.html
- Seaborn: https://seaborn.pydata.org/

### 学习资源
- Pandas Cookbook: https://pandas.pydata.org/pandas-docs/stable/user_guide/cookbook.html
- Python Data Science Handbook: https://jakevdp.github.io/PythonDataScienceHandbook/

---

*快速参考版本：v1.0*
*创建日期：2026-03-20*
*专业代码：IT-A-2-1*
