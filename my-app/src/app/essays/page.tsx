const essays = [
  { title: "Esai 1", excerpt: "Ringkasan esai pertama..." },
  { title: "Esai 2", excerpt: "Ringkasan esai kedua..." },
];

export default function Essays() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Esai Saya</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {essays.map((essay, index) => (
          <div key={index} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{essay.title}</h2>
            <p className="text-gray-600">{essay.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
