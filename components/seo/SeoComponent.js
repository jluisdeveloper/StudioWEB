import Head from "next/head"
import Test from "./test"

const HeadComponent = () => {
  const { SeoValues } = Test()
  return (
    <Head>
      <title>StudioAQP</title>
      <meta name="title" content="StudioAQP tu siguiente paso el exito" />
      <meta name="description" content="StudioAQP la mejor opcion para dar el paso que te lanzara al exito en el mercado" />
      <meta name={SeoValues.name} content={SeoValues.content} />
      <meta name="keywords" content="studioaqp, desarrollo, web, desarrollo web, programacion, diseno, sistemas" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}
export default HeadComponent


