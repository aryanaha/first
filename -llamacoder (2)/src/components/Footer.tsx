export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">F</span>
            </div>
            <span className="font-semibold">FitAI</span>
          </div>
          
          <div className="text-slate-400 text-sm">
            © 2024 FitAI. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}