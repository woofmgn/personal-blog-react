import NewStories from "../NewStories/NewStories";

const AddContent = () => {


  return (
    <section className="new-post">
      <div className="content-wrapper">
        <NewStories />
        <a className="new-article" href="/#">Добавить статью</a>
      </div>
    </section>
  )
}

export default AddContent;
