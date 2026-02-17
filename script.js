// variable for id card
const container = document.getElementById("card-id");

// function for loading data
async function load_data() {
    if (!container) {
        console.error("Container element #ticket-container not found in HTML");
        return;
    }

    // loading data
    container.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="spinner-border text-primary" role="status"></div>
            <p class="mt-3 text-muted">Loading issues...</p>
        </div>`;

    // try catch for error handling
    try {
        const response = await fetch("https://raw.githubusercontent.com/dubeboy/issues-json/refs/heads/main/issues.json");

        // checking status 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // array to fetch data on
        const issues = await response.json();

        // clear loading state
        container.innerHTML = "";

        if (!issues || issues.length === 0) {
            container.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-info shadow-sm text-center">
                        No issues found in the JSON file
                    </div>
                </div>`;
            return;
        }

        // formating dates
        const formatDate = (dateStr) => {
            if (!dateStr) return "—";
            try {
                return new Date(dateStr).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                });
            } catch {
                return "—";
            }
        };

        // loop through issues and create a card for each
        issues.forEach(issue => {
            const createdDate = formatDate(issue.createdAt);
            const updatedDisplay = formatDate(issue.updatedAt);
            const closedDisplay = formatDate(issue.closedAt);

            // styling status
            const statusLower = (issue.status || "").toLowerCase();
            const statusClass =
                statusLower === "open" ? "bg-warning text-dark" :
                    statusLower === "in-progress" ? "bg-info" :
                        statusLower === "closed" ? "bg-success" :
                            "bg-secondary";

            const statusText = issue.status
                ? issue.status.charAt(0).toUpperCase() + issue.status.slice(1).toLowerCase()
                : "Unknown";

            // styling priority
            const priorityLower = (issue.priority || "").toLowerCase() || "medium";
            const priorityClass =
                priorityLower === "high" ? "bg-danger" :
                    priorityLower === "critical" ? "bg-dark" :
                        priorityLower === "medium" ? "bg-warning text-dark" :
                            priorityLower === "low" ? "bg-success" :
                                "bg-secondary";

            const priorityText = issue.priority
                ? issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1).toLowerCase()
                : "—";

            // adding each card to the container
            container.insertAdjacentHTML("beforeend", `
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title mb-0">${issue.title || "Untitled"}</h5>
                                <span class="badge ${priorityClass}">${priorityText}</span>
                            </div>

                            <h6 class="card-subtitle text-muted mb-3">
                                <span class="fw-bold">ID:</span> ${issue.id || "—"}
                            </h6>
                            <h6 class="card-subtitle text-muted mb-3">
                                <strong>Status:</strong> 
                                <span class="badge ${statusClass}">${statusText}</span>
                            </h6>

                            <p class="card-text mb-3">
                                ${issue.description || "No description provided."}
                            </p>

                            <div class="d-flex justify-content-between align-items-center small text-muted mb-3">
                                <div><strong>Assignee:</strong> ${issue.assignee || "Unassigned"}</div>
                                <div><strong>Created:</strong> ${createdDate}</div>
                            </div>

                            <hr class="my-3">

                            <div class="d-flex justify-content-between align-items-center small text-muted">
                                <div><strong>Closed At:</strong> ${closedDisplay}</div>
                                <div><strong>Updated At:</strong> ${updatedDisplay}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });

    } catch (error) {
        console.error("Failed to load issues:", error);
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger shadow-sm text-center">
                    Failed to load issues<br>
                    <small>${error.message}</small>
                </div>
            </div>`;
    }
}

// loading the method the js dom is loading
document.addEventListener("DOMContentLoaded", load_data);