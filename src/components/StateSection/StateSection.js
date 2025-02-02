// components/StatsSection.js
export default function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16">
      <div className="max-w-screen-2xl md:px-[70px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
          {/* Stat 1 */}
          <div>
            <h2 className="text-6xl font-bold text-blue-600">94%</h2>
            <p className="mt-4 text-gray-200 text-lg">
              Web Development skills
              <br />
              gained in my Development life
            </p>
          </div>
          {/* Stat 2 */}
          <div>
            <h2 className="text-6xl font-bold  text-blue-600">12+</h2>
            <p className="mt-4 text-gray-200 text-lg">
              Provide Programming
              <br />
              language & Library
            </p>
          </div>
          {/* Stat 3 */}
          <div>
            <h2 className="text-6xl font-bold  text-blue-600">10+</h2>
            <p className="mt-4 text-gray-200 text-lg">
              Projects I participated in
              <br />
              my Development life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
