import { useIndex } from "../../data/hooks/pages/useIndex.page.js";
import styles from "../styles/pages/index.module.css";
import TextInput from "../../components/inputs/TextInputs/TextInput.jsx";
import Tweet from "../../components/data-display/tweet/Tweet.jsx";

export default function Index() {
	useIndex();
	return (
		<div>
			<TextInput />
			<Tweet></Tweet>
		</div>
	);
}
