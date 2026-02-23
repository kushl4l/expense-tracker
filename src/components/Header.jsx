function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-3xl flex flex-col px-12 py-6">
        <h1 className="text-3xl font-bold text-white">
          Expensify💰
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Track your income and expenses easily
        </p>
      </div>
    </header>
  );
}

export default Header;
