import type { NextPage } from "next";

import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "components/Loading";
import Layout from "components/layout";
import Homepage from "components/Home";

const Home: NextPage = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.authenticated) {
      router.push("/login");
    }
  }, [auth, router]);

  if (!auth.authenticated) {
    return <Loading />;
  }

  return (
    <Layout pageTitle="Ana Sayfa">
      <Homepage />
    </Layout>
  );
};

export default Home;
