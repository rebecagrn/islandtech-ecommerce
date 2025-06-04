export default function PopularColors() {
  const colors = [
    {
      name: "Blue",
      gradient: "bg-gradient-to-br from-blue-300 to-blue-600",
      ring: "ring-blue-200",
    },
    {
      name: "Orange",
      gradient: "bg-gradient-to-br from-orange-300 to-orange-600",
      ring: "ring-orange-200",
    },
    {
      name: "Green",
      gradient: "bg-gradient-to-br from-green-300 to-green-700",
      ring: "ring-green-200",
    },
    {
      name: "Red",
      gradient: "bg-gradient-to-br from-red-300 to-red-600",
      ring: "ring-red-200",
    },
    {
      name: "Cyan",
      gradient: "bg-gradient-to-br from-cyan-200 to-cyan-600",
      ring: "ring-cyan-200",
    },
  ];

  return (
    <div className="bg-white/60 rounded-3xl p-4 flex flex-col">
      <div className="font-normal text-gray-900 mb-3 text-base">
        Popular Colors
      </div>
      <div className="flex gap-4 justify-between">
        {colors.map((color, idx) => (
          <span
            key={idx}
            className={`w-8 h-8 rounded-full border-[6px] border-white ${color.gradient}`}
            style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
          />
        ))}
      </div>
    </div>
  );
}
