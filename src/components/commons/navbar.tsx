// import { useAppStore } from '@/store/app-store';
// import Input from '../erp_input/ErpInput';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import { t } from '~/@/lib/languages/language';

export const Navbar = () => {
  // const { setSelectedTenant, selectedTenant, tenants, selectLanguage, language } = useAppStore();
  return (
    <nav className="fixed h-20 w-full bg-white flex flex-row justify-between px-10 py-6 items-center border-b border-b-ledgeraio-gray/30">
      <div className="w-[120px]">
        <img className="w-[180px]" src="/FictorPay_3.png" alt="logo" />
      </div>

      <div className="flex flex-row items-center gap-5">
        {/* <Select
          defaultValue={selectedTenant?.id}
          onValueChange={(value) => {
            setSelectedTenant(tenants.find((tenant) => tenant.id === value)!);
          }}
        >
          <SelectTrigger className="w-[180px] self-end">
            <SelectValue placeholder="" defaultValue={selectedTenant?.id} />
          </SelectTrigger>
          <SelectContent>
            {tenants.length > 0
              ? tenants.map((tenant) => (
                  <SelectItem key={tenant.id} value={tenant.id}>
                    {tenant.name}
                  </SelectItem>
                ))
              : null}
          </SelectContent>
        </Select> */}

        {/* <Input.ErpSelect
          className="min-w-[80px] max-w-[80px]"
          value={language}
          items={[
            { label: 'En', value: 'enUs' },
            { label: 'Pt', value: 'ptBr' },
          ]}
          label={''}
          onValueChange={(value) => {
            selectLanguage(value as 'ptBr');
          }}
        /> */}
      </div>
    </nav>
  );
};
