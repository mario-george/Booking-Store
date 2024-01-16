import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <MainFooter />
    </div>
  );
};

export default Layout;
