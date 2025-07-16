import { CodeCraftLogo, CodeCraftLogoWithText } from "./logo"

export function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">CodeCraft Logo Variations</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo Only */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Logo Icon Only</h2>
            <div className="flex flex-wrap items-center gap-6">
              <div className="text-center">
                <CodeCraftLogo size={32} />
                <p className="text-sm text-gray-500 mt-2">32px</p>
              </div>
              <div className="text-center">
                <CodeCraftLogo size={48} />
                <p className="text-sm text-gray-500 mt-2">48px</p>
              </div>
              <div className="text-center">
                <CodeCraftLogo size={64} />
                <p className="text-sm text-gray-500 mt-2">64px</p>
              </div>
              <div className="text-center">
                <CodeCraftLogo size={80} />
                <p className="text-sm text-gray-500 mt-2">80px</p>
              </div>
            </div>
          </div>

          {/* Logo with Text */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Logo with Text</h2>
            <div className="space-y-6">
              <div>
                <CodeCraftLogoWithText size={32} textSize="text-lg" />
                <p className="text-sm text-gray-500 mt-2">Small (32px icon)</p>
              </div>
              <div>
                <CodeCraftLogoWithText size={40} textSize="text-xl" />
                <p className="text-sm text-gray-500 mt-2">Medium (40px icon)</p>
              </div>
              <div>
                <CodeCraftLogoWithText size={48} textSize="text-2xl" />
                <p className="text-sm text-gray-500 mt-2">Large (48px icon)</p>
              </div>
            </div>
          </div>

          {/* Dark Background */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-white">On Dark Background</h2>
            <div className="space-y-6">
              <CodeCraftLogo size={48} />
              <CodeCraftLogoWithText size={40} textSize="text-xl" />
            </div>
          </div>

          {/* Colored Background */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-white">On Brand Background</h2>
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                <CodeCraftLogo size={48} />
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                <CodeCraftLogoWithText size={40} textSize="text-xl" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
