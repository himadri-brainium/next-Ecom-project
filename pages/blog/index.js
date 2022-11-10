import { useRouter } from 'next/router'


const Blog = () => {
    // const router = useRouter()
    // const { pid } = router.query

    const router = useRouter()

  
    return (
        <>
            <h2>Blog</h2>
        <button onClick={() => router.push('/about')}>
        Click here to read more
        </button>
        </>
    )

}

export default Blog;
