"use client";

import { useEffect, useMemo, useState } from "react";
import { QUESTION_CATEGORIES } from "./data/questions";

const STORAGE_KEY = "bb0gape.answers.v1";
type SaveState = "idle" | "saving" | "saved" | "error";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(
    QUESTION_CATEGORIES[0].name,
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [isHydrated, setIsHydrated] = useState(false);

  const currentCategory = useMemo(
    () =>
      QUESTION_CATEGORIES.find((category) => category.name === selectedCategory) ??
      QUESTION_CATEGORIES[0],
    [selectedCategory],
  );

  const answeredCount = useMemo(
    () =>
      currentCategory.questions.filter((question, index) => {
        const key = getQuestionKey(currentCategory.name, index, question);
        return Boolean(answers[key]?.trim());
      }).length,
    [answers, currentCategory],
  );

  useEffect(() => {
    try {
      const storedAnswers = localStorage.getItem(STORAGE_KEY);
      if (storedAnswers) {
        const parsedAnswers = JSON.parse(storedAnswers) as Record<string, string>;
        if (parsedAnswers && typeof parsedAnswers === "object") {
          setAnswers(parsedAnswers);
        }
      }
    } catch {
      setSaveState("error");
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    setSaveState("saving");
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
      setSaveState("saved");
    } catch {
      setSaveState("error");
    }
  }, [answers, isHydrated]);

  const handleAnswerChange = (
    categoryName: string,
    questionIndex: number,
    question: string,
    value: string,
  ) => {
    const key = getQuestionKey(categoryName, questionIndex, question);
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [key]: value,
    }));
  };

  const clearAnswer = (
    categoryName: string,
    questionIndex: number,
    question: string,
  ) => {
    const key = getQuestionKey(categoryName, questionIndex, question);
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [key]: "",
    }));
  };

  const saveLabel =
    saveState === "saving"
      ? "Saving..."
      : saveState === "saved"
        ? "Saved locally"
        : saveState === "error"
          ? "Save failed"
          : "Ready";

  return (
    <main
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 64px)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Hero Card */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "2rem",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "0 8px 40px rgba(233, 30, 99, 0.18)",
          padding: "4rem 3rem",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>💕</div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "#880e4f",
            lineHeight: 1.15,
            margin: "0 0 1rem",
            letterSpacing: "-1px",
          }}
        >
          Made for You
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#ad1457",
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}
        >
          Answer questions about us and see how well we know each other 🌸
        </p>

        <a
          href="#questions"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #e91e63, #c2185b)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.05rem",
            padding: "0.85rem 2.5rem",
            borderRadius: "9999px",
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(233, 30, 99, 0.4)",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 8px 28px rgba(233, 30, 99, 0.5)";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 20px rgba(233, 30, 99, 0.4)";
          }}
        >
          Get Started 💗
        </a>
      </div>

      <section
        id="questions"
        style={{
          width: "100%",
          maxWidth: "1100px",
          marginTop: "2rem",
          padding: "1.5rem",
          borderRadius: "1.5rem",
          background: "rgba(255, 255, 255, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "0 8px 32px rgba(233, 30, 99, 0.12)",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: "0.5rem",
            color: "#880e4f",
            fontSize: "1.75rem",
          }}
        >
          Question Categories
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem 1rem",
            marginBottom: "0.75rem",
          }}
        >
          <p style={{ color: "#ad1457", margin: 0 }}>
            20 categories • pick one and start asking
          </p>
          <p style={{ color: "#ad1457", margin: 0, fontWeight: 600 }}>
            {answeredCount}/{currentCategory.questions.length} answered • {saveLabel}
          </p>
        </div>

        <label
          htmlFor="category"
          style={{ display: "block", marginBottom: "0.5rem", color: "#880e4f" }}
        >
          Select a category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "0.7rem 0.9rem",
            borderRadius: "0.75rem",
            border: "1px solid rgba(136, 14, 79, 0.2)",
            marginBottom: "1rem",
            color: "#880e4f",
            background: "rgba(255,255,255,0.9)",
          }}
        >
          {QUESTION_CATEGORIES.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <h3 style={{ color: "#880e4f", marginBottom: "0.75rem" }}>
          {currentCategory.name}
        </h3>
        <div style={{ display: "grid", gap: "1rem" }}>
          {currentCategory.questions.map((question, index) => {
            const questionKey = getQuestionKey(currentCategory.name, index, question);
            const inputId = `answer-${index}`;
            const answerValue = answers[questionKey] ?? "";

            return (
              <article
                key={questionKey}
                style={{
                  background: "rgba(255, 255, 255, 0.55)",
                  border: "1px solid rgba(233, 30, 99, 0.15)",
                  borderRadius: "1rem",
                  padding: "1rem",
                  boxShadow: "0 4px 16px rgba(233, 30, 99, 0.08)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    marginBottom: "0.65rem",
                    color: "#6a1b4d",
                    fontWeight: 600,
                    lineHeight: 1.45,
                  }}
                >
                  {index + 1}. {question}
                </p>

                <label
                  htmlFor={inputId}
                  style={{ display: "block", marginBottom: "0.4rem", color: "#880e4f" }}
                >
                  Your answer
                </label>
                <textarea
                  id={inputId}
                  value={answerValue}
                  onChange={(event) =>
                    handleAnswerChange(
                      currentCategory.name,
                      index,
                      question,
                      event.target.value,
                    )
                  }
                  placeholder="Write your answer here..."
                  rows={4}
                  style={{
                    width: "100%",
                    resize: "vertical",
                    borderRadius: "0.8rem",
                    border: "1px solid rgba(136, 14, 79, 0.2)",
                    padding: "0.8rem 0.9rem",
                    fontSize: "0.98rem",
                    lineHeight: 1.45,
                    color: "#5c1845",
                    background: "rgba(255, 255, 255, 0.9)",
                    outlineColor: "#e91e63",
                  }}
                />

                <div
                  style={{
                    marginTop: "0.55rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ color: "#ad1457", fontSize: "0.85rem" }}>
                    {answerValue.trim() ? `${answerValue.trim().length} characters` : "Not answered yet"}
                  </span>
                  <button
                    type="button"
                    onClick={() => clearAnswer(currentCategory.name, index, question)}
                    style={{
                      border: "1px solid rgba(136, 14, 79, 0.25)",
                      background: "rgba(255, 255, 255, 0.75)",
                      color: "#880e4f",
                      borderRadius: "9999px",
                      padding: "0.35rem 0.8rem",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    Clear
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="about"
        style={{
          width: "100%",
          maxWidth: "1100px",
          marginTop: "1rem",
          marginBottom: "2rem",
          padding: "1.5rem",
          borderRadius: "1.5rem",
          background: "rgba(255, 255, 255, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.45)",
          color: "#6a1b4d",
          textAlign: "left",
        }}
      >
        <h2 style={{ marginTop: 0, color: "#880e4f" }}>About</h2>
        <p style={{ marginBottom: 0, lineHeight: 1.5 }}>
          Bb0gape is your relationship Q&A space. Pick a category, ask a few questions,
          and use the answers to grow closer.
        </p>
      </section>
    </main>
  );
}

function getQuestionKey(categoryName: string, questionIndex: number, question: string) {
  return `${categoryName}::${questionIndex}::${question}`;
}

