{
  /* export const Modal = () => {
  const [farmPosts, setFarmPosts] = useState({});
  const [currentPost, setCurrrentPost] = useState("");

  useEffect(() => {
    getFirebase()
      .database()
      .ref()
      .child("posts")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setFarmPosts({
            ...snapshot.val(),
          });
      });
  }, []);

  return (
    <>
      <div className="create-post">
        <h1>Create new post</h1>
        {Object.keys(farmPosts).map((id) => (
          <form key={id}>
            <FormInput
              id="title"
              label="Title"
              name="title"
              type="text"
              value={farmPosts[id].title}
              required
            />
            <FormInput
              id="url"
              label="Url"
              name="url"
              type="text"
              value={farmPosts[id].url}
              required
            />
            <FormInput
              label="Image"
              name="image"
              type="text"
              value={farmPosts[id].image}
              required
            />
            <FormInput
              label="Product"
              name="product"
              type="text"
              value={farmPosts[id].product}
              required
            />
            <FormInput
              label="Describe your products"
              name="content"
              type="text"
              value={farmPosts[id].content}
              required
            />
            <FormInput
              label="Phone"
              name="phone"
              type="number"
              value={farmPosts[id].phone}
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={farmPosts[id].email}
              required
            />
            <button type="submit" value="Save">
              Submit
            </button>
          </form>
        ))}
      </div>
    </>
  );
}; */
}
