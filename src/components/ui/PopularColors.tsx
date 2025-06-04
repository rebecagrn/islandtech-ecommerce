export default function PopularColors() {
  const colors = [
    {
      name: "Blue",
      gradient: "bg-gradient-to-br from-blue-300 to-blue-600",
      ring: "ring-blue-200",
      shadow: "shadow-blue-200/60",
    },
    {
      name: "Orange",
      gradient: "bg-gradient-to-br from-orange-300 to-orange-600",
      ring: "ring-orange-200",
      shadow: "shadow-orange-200/60",
    },
    {
      name: "Green",
      gradient: "bg-gradient-to-br from-green-300 to-green-700",
      ring: "ring-green-200",
      shadow: "shadow-green-200/60",
    },
    {
      name: "Red",
      gradient: "bg-gradient-to-br from-red-300 to-red-600",
      ring: "ring-red-200",
      shadow: "shadow-red-200/60",
    },
    {
      name: "Cyan",
      gradient: "bg-gradient-to-br from-cyan-200 to-cyan-600",
      ring: "ring-cyan-200",
      shadow: "shadow-cyan-200/60",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col">
      <div className="font-normal text-gray-900 mb-3 text-base">
        Popular Colors
      </div>
      <div className="flex gap-4">
        {colors.map((color, idx) => (
          <span
            key={idx}
            className={`w-7 h-7 rounded-full border-4 border-white ${color.gradient}`}
            style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
          />
        ))}
      </div>
    </div>
  );
}
