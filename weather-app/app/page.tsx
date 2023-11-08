"use client"
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";
import "./home.css"

export default function Home() {
  return (
      <div className={"min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center "}>
            <Card className={"max-w-3xl mx-auto"}>
                <Text className={"font-bold text-center mb-10 title text-5xl"}>Weather App <span className={"text-white p-2 pt-0 pb-0"} style={{borderRadius: "7px", background: "linear-gradient(rgb(62 57 127), #771677)", lineHeight: "normal"}}>AI</span></Text>
                <Subtitle className={"text-xl text-center subtitle"}>
                    Powered by <b>OpenAI</b>, <b>Next.js 13.3</b>, <b>Tailwind CSS</b>, and more...
                </Subtitle>

                <Divider className={"my-10"}/>

                <Card className={"bg-gradient-to-br from-[#394F68] to-[#183B7E]"}>
                    <CityPicker/>
                </Card>
            </Card>
      </div>
  )
}
