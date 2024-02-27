import { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../../services/CourseService";
import toast from "react-hot-toast";

const EditCourse = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    title: "",
    trainer: "",
    description: "",
    updatedAt: "",
    isLoading: false,
  });
  let { title, trainer, isLoading, description, createdAt, updatedAt } = state;

  useEffect(() => {
    let fetchCourse = async () => {
      // let { data } = await axios.get(`http://localhost:5000/courses/${id}`);
      let data  = await CourseService.fetchid(id);
      setState(data);
    };

    fetchCourse();
  }, [id]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { title, trainer, description, updatedAt };
      await CourseService.updateServices(id, payload);
      toast.success("course has been updated successfully...");
      navigate("/"); //navigate to other page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="content">
      <main className="authBlock">
        <h1>Update Course</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              required
              placeholder="enter title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="trainer">Trainer</label>
            <input
              type="text"
              name="trainer"
              value={trainer}
              onChange={handleChange}
              required
              placeholder="enter trainer"
            />
          </div>

          <div className="form-group desc_block">
            <label htmlFor="description">description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={description}
              cols="10"
              rows="2"
              onChange={handleChange}
            />
          </div>

          <div className="form-group at">
            <label htmlFor="createdAt">Course Created at</label>
            <input
              type="date"
              name="createdAt"
              id="createdAt"
              value={createdAt}
              onChange={createdAt}
              placeholder="enter date"
            />
          </div>

          <div className="from-group1">
            <button>{isLoading ? "loading" : "update course"}</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default EditCourse;
