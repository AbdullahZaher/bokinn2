import React from 'react';

interface TenantHomeProps {
  tenant: Record<string, unknown>;
}

const getHotelName = (tenant: Record<string, unknown>): string | undefined => {
  if (tenant.data && typeof tenant.data === 'object' && tenant.data !== null && 'hotel_name' in tenant.data) {
    const data = tenant.data as Record<string, unknown>;
    if (typeof data.hotel_name === 'string') {
      return data.hotel_name;
    }
  }
  return undefined;
};

const TenantHome: React.FC<TenantHomeProps> = ({ tenant }) => {
  const hotelName = getHotelName(tenant);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to {(hotelName as string) || (tenant?.id as string) || 'Tenant'}!</h1>
        <p className="text-lg text-gray-600 mb-2">This is your tenant home page.</p>
        <div className="mt-6 text-left">
          <div className="mb-2"><span className="font-semibold">Tenant ID:</span> {tenant?.id as string}</div>
          <div className="mb-2"><span className="font-semibold">Owner User ID:</span> {tenant?.user_id as string}</div>
          <div className="mb-2"><span className="font-semibold">Package ID:</span> {tenant?.package_id as string}</div>
        </div>
      </div>
    </div>
  );
};

export default TenantHome; 