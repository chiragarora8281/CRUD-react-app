import AxiosInstances from "../AxiosInstance/axiosInstance";

const CourseService = {
    createService: async payload =>{
        await AxiosInstances.post("/courses",payload);
    },
    fetchService: async () =>{
      let {data} = await AxiosInstances.get("/courses");
      return data;
    },
    updateServices: async (id,payload) =>{
        await AxiosInstances.put(`/courses/${id}`, payload);
    },
    deleteService: async id=>{
        await AxiosInstances.delete(`/courses/${id}`);
    },
    fetchid: async id => {
        let {data} = await AxiosInstances.get(`/courses/${id}`);
        return data;
    }
    
}

export default CourseService