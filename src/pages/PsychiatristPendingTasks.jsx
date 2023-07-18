import React from "react";
import PageFrameTitle from "../components/PageFrameTitle";
import PageGuide from "../components/PageGuide";
import PsychiatristMenuList from "../components/PsychiatristMenuList";
import SessionContainer from "../components/SessionContainer";
import rightArrow from "../images/right-arrow.svg"

const PsychiatristPendingTasks = () => {
    const taskItems = [
        {
            id: 1,
            title: "Post Session Notes",
            date: "23 April 2022",
            overdueDays: 5,
        },
        {
            id: 2,
            title: "Post Session Notes",
            date: "23 April 2022",
            overdueDays: 5,
        },
        {
            id: 3,
            title: "Post Session Notes",
            date: "23 April 2022",
            overdueDays: 5,
        },
        {
            id: 4,
            title: "Post Session Notes",
            date: "23 April 2022",
            overdueDays: 5,
        },
        {
            id: 5,
            title: "Post Session Notes",
            date: "23 April 2022",
            overdueDays: 5,
        },
        {
            id: 6,
            title: "Post Session Notes",
            date: "23 April 2022",
            overdueDays: 5,
        },
        {
            id: 6,
            title: "Post Session Notes",
            date: "23 April 2022",
            overdueDays: 5,
        },
    ];

    const handleCompleteTask = (taskId) => {
    };

    return (
        <div className="main-content container-fluid">
            <div className="row align-items-md-stretch">
                <div className="page-frame-title col-md-6">
                    <PageFrameTitle title="Psychiatrist Profile" />
                </div>
                <div className="page-guide col-md-6">
                    <PageGuide guideText="Psychiatrist Profile > Pending Tasks" />
                </div>
            </div>
            <PsychiatristMenuList />
            <div className="user-information-container">
                <div className="information-header">
                    <p className="title">Pending Tasks</p>
                </div>
                <div className="task-container">
                    {taskItems.map((task) => (
                        <div className="task-item" key={task.id}>
                            <div className="task-item-header">
                                <span className="task-item-title">{task.title}</span>
                                <span className="task-item-date">{task.date}</span>
                            </div>
                            <div className="task-overdue-container">
                                <div className="task-overdue-btn">
                                    <div className="task-overdue">
                                        <button>{task.overdueDays} Days Overdue</button>
                                    </div>
                                    <div className="complete-task">
                                        <button onClick={() => handleCompleteTask(task.id)}>
                                            Complete Task
                                        </button>
                                    </div>
                                    <div className="task-right-arrow">
                                        <img
                                            className="task-right-arrow-icon"
                                            alt=""
                                            src={rightArrow}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <SessionContainer className="above-session-container" />
        </div>
    );
};
export default PsychiatristPendingTasks;