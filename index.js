let status = {
  1: "Pending",
  2: "Confirmed",
  3: "Expired",
  4: "Reject",
  5: "Cancel",
};

let type = {
  1: "Pay",
  2: "Collect",
};

let direction = {
  1: "Sent",
  2: "received",
};

const output = document.getElementById("output");

const url =
  "https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2";

fetch(url)
  .then((response) => response.text())
  .then((data) => {
    const info = data;
    console.log(typeof info);
    console.log(info);
    const obj = JSON.parse(info);
    console.log(obj.transactions.map((result) => console.log(result)));

    output.innerHTML = "";

    obj.transactions.map((result) => {
      console.log(result.direction);
      if (result.direction == 1 && result.type == 1) {
        const htmlString = ` <div class="row1">
        <div class="payment"> ₹ ${result.amount}</div>
        <div class="type"> ✅  You Paid</div>
      </div>
      <div class="row2">
        <div class="transaction-id"> Transaction Id : ${result.id}</div>

        <div class="more-info">
         <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-right--v1.png"/>
        </div>
      </div>
       <div class="date-right">24 Feb 2020</div>
      `;
        let outputString = document.createElement("div");
        outputString.classList.add("right");
        outputString.innerHTML = htmlString;
        output.appendChild(outputString);
      }

      //direction 1 type 2

      if (result.direction == 1 && result.type == 2) {
        const htmlString = ` <div class="row1">
        <div class="payment"> ₹ ${result.amount}</div>
        <div class="type">📎 You Requested</div>
      </div>
      <div class="row2">
        <div class="transaction-id"><button class="button">Cancel</button></div>

        <div class="more-info">
          <img class="image" src="https://img.icons8.com/cotton/64/000000/circled-chevron-right--v1.png"/>
        </div>
      </div>       <div class="date-right">24 Feb 2021</div>            `;
        let outputString = document.createElement("div");
        outputString.classList.add("right");
        outputString.innerHTML = htmlString;
        output.appendChild(outputString);
      }

      //left side of
      if (result.direction == 2 && result.type == 1) {
        const htmlString = ` <div class="row1">
        <div class="payment"> ₹ ${result.amount}</div>
        <div class="type">✅ You Recieved</div>
      </div>
      <div class="row2">
        <div class="transaction-id">Transaction Id : ${result.id}</div>

        <div class="more-info">
          <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-right--v1.png"/>
        </div>
      </div> <div class="date-left">25 Feb 2021</div>
                            `;
        let outputString = document.createElement("div");
        outputString.classList.add("left");
        outputString.innerHTML = htmlString;
        output.appendChild(outputString);
      }

      if (result.direction == 2 && result.type == 2) {
        const htmlString = ` <div class="row1">
        <div class="payment"> ₹ ${result.amount}</div>
        <div class="type">📎 Request Recieved</div>
      </div>
      <div class="row2">
        <div class="transaction-id"><button class="pay">Pay</button> <button class="button">Decline</button></div>

        <div class="more-info">
         <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-right--v1.png"/>
        </div>
        
      </div>
      <div class="date-left">27 Feb 2021</div>`;
        let outputString = document.createElement("div");
        outputString.classList.add("left");
        outputString.innerHTML = htmlString;
        output.appendChild(outputString);
      }
    });
  })
  .catch((err) => console.log(err));

console.log(status[1]);
