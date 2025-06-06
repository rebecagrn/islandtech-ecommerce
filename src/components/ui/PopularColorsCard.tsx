import { popularColors } from "@/data/data";
import Card from "@/components/ui/Card";

export default function PopularColorsCard() {
  return (
    <Card className="p-4 flex flex-col">
      <div className="flex flex-col h-full justify-between">
        <div className="font-normal text-gray-900 mb-3 text-base">
          Popular Colors
        </div>
        <div className="flex gap-4 justify-between">
          {popularColors.map((color, idx) => (
            <button
              key={idx}
              className={`w-8 h-8 rounded-full border-[6px] border-white hover:scale-105 transition-transform duration-300 ease-out ${color.gradient}`}
              style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
