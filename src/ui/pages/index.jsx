import { useIndex } from "../../data/hooks/pages/useIndex.page.js";
import styles from "../styles/pages/index.module.css";

export default function Index() {
	useIndex();
	return <div>Index</div>;
}
