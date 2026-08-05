"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import { useAuth } from "../../contexts/AuthContext";

function DashboardContent() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="mx-auto min-h-screen max-w-[860px] px-5 pb-16 pt-[112px] sm:px-6 md:pt-[120px] 3xl:max-w-[1100px] 3xl:pt-[160px]">
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="mr-auto flex flex-col gap-1">
          <div className="type-kicker text-accent">Account</div>
          <h1 className="type-h2 m-0">Dashboard</h1>
        </div>
        <button type="button" onClick={handleLogout} className="btn btn-secondary">
          Log out
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="card elev-sm gap-4 p-5 sm:p-6 3xl:gap-6 3xl:p-8">
          <h2 className="type-h3 m-0">Welcome, {user?.name}</h2>

          <dl className="m-0 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <dt className="type-meta uppercase tracking-[0.08em] text-t-50">
                Email
              </dt>
              <dd className="type-ui m-0">{user?.email}</dd>
            </div>

            {user?.createdAt && (
              <div className="flex flex-col gap-1">
                <dt className="type-meta uppercase tracking-[0.08em] text-t-50">
                  Member since
                </dt>
                <dd className="type-ui m-0">
                  {new Date(user.createdAt).toLocaleDateString()}
                </dd>
              </div>
            )}
          </dl>
        </div>

        <div className="card elev-sm gap-4 p-5 sm:p-6 3xl:gap-6 3xl:p-8">
          <h2 className="type-h3 m-0">Quick actions</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/" className="btn btn-secondary">
              View portfolio
            </Link>
            <Link href="/#contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
