
import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import FiltersBar from "@/components/FiltersBar/FiltersBar";
import MainContent from "@/components/MainContent/MainContent";

export default function Home() {

  return (
    <main className={styles.mainContainer}>
      <Hero />
      <FiltersBar />
      <MainContent />
    </main>
  );
}
