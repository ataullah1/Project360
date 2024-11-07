import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 20 },
  section: { marginBottom: 10 },
  title: { fontSize: 20, textAlign: "center" },
});

const MyPDFDocument = () => (
  <Document>
    <Page style={styles.page} size={"A4"}>
      <View style={styles.section}>
        <Text style={styles.title}>Hello, PDF!</Text>
      </View>
      <View style={styles.section}>
        <Text>
          Here is some more text in a PDF document. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Libero nulla eaque, sequi consequuntur
          labore assumenda est pariatur? Rem temporibus ab, aperiam ea similique
          praesentium quis aliquid explicabo laborum magnam, minus esse
          necessitatibus perspiciatis obcaecati voluptates possimus sint dolor
          cupiditate, iste tempora est eveniet. Dicta expedita omnis earum
          commodi, molestiae quidem dolores harum adipisci animi amet suscipit
          aut quas quisquam voluptatibus nemo eveniet reprehenderit libero!
          Incidunt totam assumenda deserunt ab illum, asperiores harum beatae
          error suscipit ea vel, dolorum maxime eligendi quasi nihil
          consequuntur ducimus alias quos, sint voluptatum recusandae
          voluptatibus voluptas vitae laboriosam? Placeat nemo doloribus omnis
          iste id odit ratione, laborum explicabo vel rerum ipsum, repellendus
          aliquid sapiente fugit alias, aut autem enim quas dolor quod ex! Natus
          laudantium laboriosam facilis earum et, distinctio laborum porro quo
          minus quos culpa sit, modi eaque eius ducimus iure animi autem
          voluptatem consectetur voluptate nostrum consequuntur! Nisi porro
          dolorum atque amet maiores asperiores quidem. Veritatis neque
          asperiores dolore eligendi vel ad illum dolores totam quo nihil
          corrupti reprehenderit, nobis id ut natus ea est adipisci earum facere
          quod laboriosam pariatur rem quis dicta. Doloremque ex assumenda cum
          sit impedit, mollitia repellendus nemo ullam? Cumque totam voluptatem
          facere officiis est, excepturi nulla aut?
        </Text>
        <Text>Here is some molorere text in a PDF document.</Text>
        <Text>
          Here is some more text Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil, molestiae consequuntur est officiis culpa
          fuga voluptatibus enim aspernatur. Iste tempore quam dolores
          blanditiis perferendis maxime in eveniet itaque eius repellendus
          voluptas nisi quasi incidunt deleniti quibusdam vitae magni distinctio
          odit cumque, voluptatum pariatur, assumenda delectus iusto nobis.
          Quisquam at, architecto eum deleniti mollitia nam quam tempora
          necessitatibus. Ullam, officia odio. Perferendis obcaecati voluptas
          provident sed dignissimos earum eum perspiciatis odit voluptate,
          repudiandae reiciendis eligendi laudantium. Sequi eaque id perferendis
          ipsum delectus quod numquam, perspiciatis facere molestias assumenda
          laudantium itaque dicta ducimus natus optio quae ratione deserunt ipsa
          labore sed amet. in a PDF document.
        </Text>
        <Text>
          Here is some more text Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil, molestiae consequuntur est officiis culpa
          fuga voluptatibus enim aspernatur. Iste tempore quam dolores
          blanditiis perferendis maxime in eveniet itaque eius repellendus
          voluptas nisi quasi incidunt deleniti quibusdam vitae magni distinctio
          odit cumque, voluptatum pariatur, assumenda delectus iusto nobis.
          Quisquam at, architecto eum deleniti mollitia nam quam tempora
          necessitatibus. Ullam, officia odio. Perferendis obcaecati voluptas
          provident sed dignissimos earum eum perspiciatis odit voluptate,
          repudiandae reiciendis eligendi laudantium. Sequi eaque id perferendis
          ipsum delectus quod numquam, perspiciatis facere molestias assumenda
          laudantium itaque dicta ducimus natus optio quae ratione deserunt ipsa
          labore sed amet. in a PDF document.
        </Text>
        <Text>
          Here is some more text Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil, molestiae consequuntur est officiis culpa
          fuga voluptatibus enim aspernatur. Iste tempore quam dolores
          blanditiis perferendis maxime in eveniet itaque eius repellendus
          voluptas nisi quasi incidunt deleniti quibusdam vitae magni distinctio
          odit cumque, voluptatum pariatur, assumenda delectus iusto nobis.
          Quisquam at, architecto eum deleniti mollitia nam quam tempora
          necessitatibus. Ullam, officia odio. Perferendis obcaecati voluptas
          provident sed dignissimos earum eum perspiciatis odit voluptate,
          repudiandae reiciendis eligendi laudantium. Sequi eaque id perferendis
          ipsum delectus quod numquam, perspiciatis facere molestias assumenda
          laudantium itaque dicta ducimus natus optio quae ratione deserunt ipsa
          labore sed amet. in a PDF document.
        </Text>
        <Text>
          Here is some more text Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil, molestiae consequuntur est officiis culpa
          fuga voluptatibus enim aspernatur. Iste tempore quam dolores
          blanditiis perferendis maxime in eveniet itaque eius repellendus
          voluptas nisi quasi incidunt deleniti quibusdam vitae magni distinctio
          odit cumque, voluptatum pariatur, assumenda delectus iusto nobis.
          Quisquam at, architecto eum deleniti mollitia nam quam tempora
          necessitatibus. Ullam, officia odio. Perferendis obcaecati voluptas
          provident sed dignissimos earum eum perspiciatis odit voluptate,
          repudiandae reiciendis eligendi laudantium. Sequi eaque id perferendis
          ipsum delectus quod numquam, perspiciatis facere molestias assumenda
          laudantium itaque dicta ducimus natus optio quae ratione deserunt ipsa
          labore sed amet. in a PDF document.
        </Text>
        <Text>
          Here is some more text Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil, molestiae consequuntur est officiis culpa
          fuga voluptatibus enim aspernatur. Iste tempore quam dolores
          blanditiis perferendis maxime in eveniet itaque eius repellendus
          voluptas nisi quasi incidunt deleniti quibusdam vitae magni distinctio
          odit cumque, voluptatum pariatur, assumenda delectus iusto nobis.
          Quisquam at, architecto eum deleniti mollitia nam quam tempora
          necessitatibus. Ullam, officia odio. Perferendis obcaecati voluptas
          provident sed dignissimos earum eum perspiciatis odit voluptate,
          repudiandae reiciendis eligendi laudantium. Sequi eaque id perferendis
          ipsum delectus quod numquam, perspiciatis facere molestias assumenda
          laudantium itaque dicta ducimus natus optio quae ratione deserunt ipsa
          labore sed amet. in a PDF document.
        </Text>
        <Text>Here is some more text in a PDF document.</Text>
      </View>
    </Page>
  </Document>
);

const PDFGenerator = () => (
  <div>
    <PDFDownloadLink
      className="bg-fuchsia-500 p-5"
      document={<MyPDFDocument />}
      fileName="my-document.pdf"
    >
      {({ loading }) => (loading ? "Loading PDF..." : "Download PDF")}
    </PDFDownloadLink>
  </div>
);

export default PDFGenerator;
