import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
	const onClickCard = () => {};
	const items = [
		{
			id: 1,
		},
		{
			id: 1,
		},
		{
			id: 1,
		},
		{
			id: 1,
		},
		{
			id: 1,
		},
		{
			id: 1,
		},
		{
			id: 1,
		},
		{
			id: 1,
		},
		{
			id: 1,
		},
	];
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.titleContent}>
					<div>
						<div style={{ fontSize: 24, fontWeight: "bold" }}>
							All my accounts
						</div>
						<div style={{ color: "#9DB5C8", marginTop: 4 }}>June 10 2018</div>
					</div>
					<div>
						<span className="material-symbols-rounded" style={{ fontSize: 28 }}>
							equalizer
						</span>
					</div>
				</div>

				<div>
					<Carousel
						showThumbs={false}
						showArrows={false}
						showStatus={false}
						// autoPlay
					>
						<Link href="/detailCard">
							<img src="/visa-1.png" />
						</Link>

						<Link href="/detailCard">
							<img src="/visa-2.png" />
						</Link>
						<div>
							<img src="/visa-3.png" />
						</div>
					</Carousel>
				</div>

				<div style={{ padding: `0 2rem` }}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: "50%",
							}}
						>
							<div
								style={{
									margin: `8px 0px`,
									fontWeight: "bold",
									fontSize: "14px",
								}}
							>
								Income
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									color: "#42B84F",
									fontSize: "18px",
								}}
							>
								<span className="material-symbols-rounded">arrow_downward</span>
								<div style={{ marginLeft: "8px" }}>$9,302.00</div>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: "50%",
							}}
						>
							<div
								style={{
									margin: `8px 0px`,
									fontWeight: "bold",
									fontSize: "14px",
								}}
							>
								Expense
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									color: "red",
									fontSize: "18px",
								}}
							>
								<span className="material-symbols-rounded">arrow_upward</span>
								<div style={{ marginLeft: "8px" }}>$2,790.00</div>
							</div>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							margin: "16px 0px",
						}}
					>
						<div style={{ fontSize: 24, fontWeight: "normal" }}>
							Detail of movements
						</div>
						<span className="material-symbols-rounded">today</span>
					</div>
					{/* /// */}

					{items.map((i) => (
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								margin: "16px 0px",
								backgroundColor: "#fff",
								padding: "16px 8px",
								borderRadius: 16,
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									width: "80%",
								}}
							>
								<div style={{ width: "20%" }}>
									<span className="material-symbols-rounded">restaurant</span>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
									}}
								>
									<div>Restaurant Manhattan</div>
									<div>June 10 2018</div>
								</div>
							</div>
							<div
								style={{
									width: "20%",
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									color: "red",
									fontSize: "18px",
								}}
							>
								<div style={{ marginLeft: "8px" }}>$170</div>
								<span className="material-symbols-rounded">arrow_upward</span>
							</div>
						</div>
					))}
				</div>
			</div>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
