<template lang="html">
    <div class="main timeline">
     <div class="container left">
       <div class="content">
         <h2>07/2017 – Ongoing: E.ON Digital IT</h2>
         <p>Product Owner (eon.com) &amp; Agile Coach
           <ul>
             <li>Coordinated relaunch of eon.com to improve UX and E.ON KPIs</li>
             <li>Created model to prioritize new features according to business value</li>
             <li>Steered transition towards DevOps operating model</li>
             <li>Introduced LeSS (Large-Scale Scrum) to eon.com to enable multi-team Scrum</li>
             <li>Set-up node.js backend for team KPI dashboard &amp; implemented Cypress E2E testing</li>
             <li>Conducted Agile product development trainings across E.ON</li>
           </ul>
         </p>
       </div>
     </div>
     <div class="container left">
       <div class="content">
         <h2>10/2018 – 05/2019 infinimesh, Inc. (Open Source IoT platform startup)</h2>
         <p>Founder &amp; COO
           <ul>
             <li>Created business &amp; financing strategy and liaised with potential investors</li>
            <li>Aligned with partners to define features and communicated them to devs</li>
            <li>Successfully applied to Google Startup Program &amp; Startplatz Accelerator</li>
            <li>Dissolved company after CTO had to leave for family-related reasons</li>
           </ul>
         </p>
       </div>
     </div>
    </div>
</template>

<script>
  import TheHeader from "@/components/TheHeader.vue";
  import TheNavBar from "@/components/TheNavBar.vue";
  import TheFooter from "@/components/TheFooter.vue";

  export default {
    name: "home",
    components: {
      TheHeader,
      TheNavBar,
      TheFooter
    }
  };
</script>

<style lang="css" scoped>

  ul {
     text-align: left;
  }


  * {
    box-sizing: border-box;
  }

  /* Set a background color */
  body {
    background-color: #474e5d;
    font-family: Helvetica, sans-serif;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  /* Container around content */
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }

  /* The circles on the timeline */
  .container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 0;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }

  /* The actual content */
  .content {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
  /* Place the timelime to the left */
    .timeline::after {
      left: 31px;
    }

  /* Full-width containers */
    .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

  /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }

  /* Make sure all circles are at the same spot */
    .left::after, .right::after {
      left: 15px;
    }

  /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
</style>
