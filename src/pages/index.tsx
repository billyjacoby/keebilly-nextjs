import { Main } from '@/components/main';
import { HeaderSection } from '@/components/navbar';

export default function Home() {
  return (
    <>
      <HeaderSection
        links={[
          { link: '/', label: 'Home' },
          { link: '/products', label: 'Products' },
          { link: '/about', label: 'About' },
        ]}
      />
      <Main>
        <h1>Hello world</h1>
      </Main>
    </>
  );
}
