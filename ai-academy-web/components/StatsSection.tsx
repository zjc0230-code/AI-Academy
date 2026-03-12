"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, TrendingUp, Award } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  value: string
  label: string
}

export default function StatsSection() {
  const stats: Stat[] = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: "50+",
      label: "精品课程",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "10K+",
      label: "学员人数",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "98%",
      label: "好评率",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "15+",
      label: "专业方向",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
