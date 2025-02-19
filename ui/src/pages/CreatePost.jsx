import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Header from "../components/Header";
import DropDown from "../components/DropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { savePost } from "../services/api";
import routePath from "../routes/route";

const Component = styled(Box)({
	padding: "80px 200px",
	background: "#F5F5F5",
});

const Container = styled(Box)({
	display: "flex",
	background: "#FFFFFF",
	borderRadius: 20,
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0 70px",
	"& > p": {
		fontSize: 35,
		fontWeight: 700,
		opacity: "0.7",
	},
});

const FormWrapper = styled(Box)({
	display: "flex",
	flexDirection: "column",
	marginTop: "20px",
	padding: "20px",
	background: "#FFFFFF",
	borderRadius: "20 px",
	"& > *": {
		marginTop: "20px !important",
	},
});

const defaultObj = {
	profile: "Profile",
	type: "Online",
	description: "1",
	experience: "3-5 Years",
	technology: ["Java", "HTML", "CSS"],
	salary: "Rs 800000-1000000",
};

const options = {
	type: ["Online", "Offline"],
	experience: ["0-2 Years", "3-5 Years", "5 Years or more"],
	technology: [
		"Java",
		"JavaScript",
		"React",
		"Angular",
		"Node.js",
		"Docker",
		"AWS",
		"HTML",
		"CSS",
	],
	salary: [
		"Rs 0-300000",
		"Rs 300000-500000",
		"Rs 500000-800000",
		"Rs 800000-1000000",
		"Rs 1000000-1500000",
		"Rs 1500000-2000000",
		"Rs 2000000 or more",
	],
};

const CreatePost = () => {
	const [data, setData] = useState(defaultObj);

	const navigate = useNavigate();

	const createPostImage =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

	const handleChange = (e) => {
		console.log(data);
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const saveJob = async () => {
		await savePost(data);
		navigate(routePath.posts);
	};

	return (
		<div>
			<Header />
			<Component>
				<Container>
					<Typography>Create a job post</Typography>
					<img src={createPostImage} alt="createPostImage" />
				</Container>
				<FormWrapper>
					<TextField
						placeholder="Job Title"
						name="profile"
						onChange={handleChange}
						value={data.profile}
					/>
					<DropDown
						label="Job Type"
						id="job-type-label"
						value={data.type}
						handleChange={handleChange}
						options={options.type}
						name="type"
					/>
					<TextField
						placeholder="Job Description"
						name="description"
						onChange={handleChange}
						value={data.description}
					/>
					<DropDown
						label="Experience"
						id="experience-label"
						value={data.experience}
						handleChange={handleChange}
						options={options.experience}
						name="experience"
					/>
					<DropDown
						label="Technology"
						id="technology-label"
						value={data.technology}
						handleChange={handleChange}
						options={options.technology}
						name="technology"
						multiple
					/>
					<DropDown
						label="Salary"
						id="salary-label"
						value={data.salary}
						handleChange={handleChange}
						options={options.salary}
						name="salary"
					/>
					<Button onClick={() => saveJob()} variant="contained">
						Save job
					</Button>
				</FormWrapper>
			</Component>
		</div>
	);
};

export default CreatePost;
