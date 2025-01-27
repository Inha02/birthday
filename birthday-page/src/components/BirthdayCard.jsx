import React from "react";

function BirthdayCard() {
    const name = "아빠"; // 여기 이름을 바꾸면 맞춤형 메시지를 추가할 수 있어요!


    return (
        <div style={styles.card}>
            <h2>{name} 생일 축하해요! 🥳</h2>
            <p>새해 복 출발출발</p>
            <p>좋은 하루 바로가지~! 🎁</p>
        </div>
    );
}

const styles = {
    card: {
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "20px auto",
    },
};

export default BirthdayCard;
