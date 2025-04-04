import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Awards / Badges */}
          <div className="mb-6 md:mb-0 flex space-x-4">
            <div className="bg-white p-2 rounded">
              {/* Placeholder pour les images de badges */}
              <div className="w-16 h-16 bg-gray-300">
                {/* Image badge */}
              </div>
            </div>
            <div className="bg-orange-500 p-2 rounded text-white">
              <div>Travel Awards</div>
              <div className="mt-2">
                <div className="text-sm">Powered by</div>
                <div>Hôtel Alpha</div>
              </div>
            </div>
            <div className="bg-blue-600 p-2 rounded text-white">
              <div>Booking.com</div>
              <div className="text-xl font-bold">8,9</div>
            </div>
          </div>

          {/* Informations */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Informations</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Informations</Link></li>
              <li><Link href="#" className="hover:underline">Informations</Link></li>
              <li><Link href="#" className="hover:underline">Informations</Link></li>
            </ul>
          </div>

          {/* Nous suivre */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Nous suivre</h3>
            <div className="flex space-x-4">
              {/* Icônes réseaux sociaux */}
              <a href="#" className="hover:text-gray-300">FB</a>
              <a href="#" className="hover:text-gray-300">IG</a>
              <a href="#" className="hover:text-gray-300">TW</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
