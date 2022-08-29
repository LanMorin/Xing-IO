import Link from "next/link";
import Style from "../../styles/content/Blog.module.css";
import Post from "../../models/Post";
import dbConnect from "../../lib/dbConnect";
import Image from "next/image"

export default function index({ posts }) {
  return (
    <div className={Style.containerBarMenu}>
      <div className={Style.barMenu}>
        <ul>
          <li>
            <Link href={"/"}>
              <a>
                <Image src={"/img/image1.webp"} width={25} height={25}></Image>
                {/* Posts */}
              </a>
            </Link>
          </li>

          <li>
            <Link href={"/"}>
              <a>
                <Image src={"/img/image1.webp"} width={25} height={25}></Image>
                {/* Tournaments */}
              </a>
            </Link>
          </li>

          <li>
            <Link href={"/"}>
              <a>
                <Image src={"/img/image1.webp"} width={25} height={25}></Image>
                {/* Ranking */}
              </a>
            </Link>
          </li>

          <li>
            <Link href={"/"}>
              <a>
                <Image src={"/img/image1.webp"} width={25} height={25}></Image>
                {/* Streaming */}
              </a>
            </Link>
          </li>

          <li>
            <Link href={"/"}>
              <a>
                <Image src={"/img/image1.webp"} width={25} height={25}></Image>
                {/* Podcast */}
              </a>
            </Link>
          </li>

          <li>
            <Link href={"/"}>
              <a>
                <Image src={"/img/image1.webp"} width={25} height={25}></Image>
                {/* Gossip */}
              </a>
            </Link>
          </li>

        </ul>
      </div>

      {
        posts.map(({ id, title, body }) => (
          <div key={id} className={Style.containerPost}>

            <div className={Style.postBackground} style={{ backgroundImage: "url(/img/image1.webp)" }}>
            </div>

            <h3>
              <Link href={`/blog/${id}`}>
                <a>
                  {id} - {title}
                </a>
              </Link>
            </h3>
            <p>{body}</p>
          </div>
        ))
      }
    </div>
  )
}

export async function getStaticProps() {
  try {
    await dbConnect();
    const res = await Post.find({});
    const posts = res.map((doc) => {
      const post = doc.toObject();
      post._id = post._id.toString();
      return post;
    });
    return { props: { posts } };
  } catch (error) {
    console.log(error);
    throw error
  }
}