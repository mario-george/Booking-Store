import MainHeader from "@/components/MainHeader";
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
    </div>
  );
};

export default Layout;
