import Cards from "../components/Cards/Cards";

type Props = {
  type: string;
};

function Home({ type }: Props) {
  return (
    <div>
      <Cards type={type || "random"} />
    </div>
  );
}

export default Home;
