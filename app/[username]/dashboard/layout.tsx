export default async function DashboardLayout({
  children,
  params: paramsPromise,
}: {
  children: React.ReactNode;
  params: Promise<{ username: string }>;
}) {
  const params = await paramsPromise;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 flex justify-between">
        <h1 className="font-bold">User Dashboard</h1>
        <span className="text-gray-500">@{params.username}</span>
      </header>
      <main>{children}</main>
    </div>
  );
}
