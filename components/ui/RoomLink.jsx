import Link from 'next/link';

export default function RoomLink({ title, href = "#" }) {
  return (
    <Link href={href}>
      <div className="py-3 border-b border-gray-300 hover:bg-gray-100">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </Link>
  );
}
