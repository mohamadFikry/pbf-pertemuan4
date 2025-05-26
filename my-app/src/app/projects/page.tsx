import Image from 'next/image';

const projects = [
  {
    title: 'Proyek 1',
    description: 'Deskripsi singkat proyek 1.',
    image: '/images/project1.png',
  },
  {
    title: 'Proyek 2',
    description: 'Deskripsi singkat proyek 2.',
    image: '/images/project2.png',
  },
];

export default function Projects() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Proyek Saya</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg shadow p-4">
            <Image src={project.image} alt={project.title} width={600} height={300} className="rounded" />
            <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
