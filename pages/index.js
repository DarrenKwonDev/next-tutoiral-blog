import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          온라인 한국어 교육 플랫폼 EduPopKorn을 창업했으며 기술 부문을 담당하고
          있습니다. 소규모 스타트업을 운영하기 위해 서비스 기획에서부터 클라우드
          인프라 구축 및 배포까지 제너럴리스트가 되는 것이 목표입니다. 현재
          Next+Node(웹), Flutter(모바일)를 주로 다루고 있으며 NLP에도 관심이
          있는 편입니다.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
