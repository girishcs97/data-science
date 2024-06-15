import React, { useState } from "react";
import CardDesign from '../CardView/cardview';
import Biology from "../../images/biology.png";
import T2 from "../../images/Track2.png";
import T3 from "../../images/Track3.jpg";
import T4 from "../../images/Track4.png";
import T5 from "../../images/Track5.png";
import T6 from "../../images/Track6.png";
import T7 from "../../images/Track7.png";
import T8 from "../../images/Track8.png";
import T9 from "../../images/Track9.png";
import T10 from "../../images/Track10.png";
import T11 from "../../images/Track11.png";
import ADA from "../../images/ADA.jpg";
import MFDS from "../../images/MFDS.png";
import IC from "../../images/IC.jpg";
import SC from "../../images/SC.png";
import AML from "../../images/AML.jpg";
import ADLE from "../../images/ADLE.jpg";
import DS from "../../images/DS.jpg";
import MI from "../../images/MI.png";
import MII from "../../images/MII.jpg";
import IDS from "../../images/IDS.jpeg";
import HCI from "../../images/HCI.jpeg"

import { Fade } from "react-reveal";
import Accordion from "react-bootstrap/Accordion";

import Modal from "react-bootstrap/Modal";
import "./major.css";

const Major = () => {
  const [show, setShow] = useState(false);
  const [ashow, setAShow] = useState(false);
  const [type, setType] = useState("");
  const [atype, setAType] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAccClose = () => setAShow(false);
  const handleAccShow = () => setAShow(true);

  const handleAccData = () => {
    if (atype === "BIO") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                BIOL 101 - Introduction to Biology I
              </Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 101 - Introduction to Biology I</h5>
                <p>
                  The goals of the two-semester biology introductory sequence
                  are: (1) to provide an understanding of the unifying themes in
                  modern biology, (2) to introduce the diversity of life at all
                  levels of organization, and (3) to illustrate the methods and
                  modes of scientific inquiry currently used in the biological
                  sciences. During the fall semester (BIOL 101) the focus is on
                  fundamental principles of evolution and genetics, whereas in
                  the spring (BIOL 102) the diversity of life, from cells to
                  organisms, is explored. The fall and spring courses do not
                  have to be taken in sequence but both are pre-requisites for
                  all advanced courses in biology.
                </p>
                <p>
                  <strong>Corequisites:</strong> Must register for lab for BIOL
                  101.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> SP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
                BIOL 102 - Introduction to Biology II
              </Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 102 - Introduction to Biology II</h5>
                <p>
                  The goals of this two-semester course are: (1) to provide an
                  understanding of the unifying themes in modern biology, (2) to
                  introduce the diversity of life at all levels of organization,
                  and (3) to illustrate the methods and modes of scientific
                  inquiry currently used in the biological sciences. During the
                  fall semester (<a href="#">BIOL 101</a>) the focus is on
                  fundamental principles of evolution and genetics, whereas in
                  the spring (<a href="#">BIOL 102</a>) the diversity of life,
                  from cells to organisms, is explored. The two courses do not
                  have to be taken in sequence but both are pre-requisites for
                  all advanced courses in biology.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> SP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered in spring
                  every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                BIOL 106 - Introductory Biostatistics
              </Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 106 - Introductory Biostatistics</h5>
                <p>
                  An introduction to mathematical and statistical methods that
                  are most useful to biologists, this course provides skills
                  that are useful in organizing and summarizing data, graphic
                  methods of data presentation, and testing hypotheses based on
                  experimental results. Key mathematical methods for describing
                  biological phenomena are included, along with basic techniques
                  for identifying differences among groups and relationships
                  among variables. This course may be used by biology majors to
                  fulfill part of their mathematics requirement. Alternatively,
                  it may be counted among the required 10 biology courses for
                  the major.
                </p>
                <p>
                  <strong>Prerequisites::</strong> <a href="">BIOL 101</a> and{" "}
                  <a href="">BIOL 102</a>, and one semester of calculus (
                  <a href="">MATH 120</a>, <a href="">MATH 124</a>, or{" "}
                  <a href="">BIOL 121</a>).
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                BIOL 123 - Introduction to Bioinformatics
              </Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 123 - Introduction to Bioinformatics</h5>
                <p>
                  This course will provide an applied introduction to
                  bioinformatics, computational biology, and comparative
                  genomics. Students will work in research teams to analyze DNA
                  and RNA sequence data from public databases within a LINUX
                  environment. Teams will research the biology of sequenced
                  organisms, evaluate methodologies, as well as plan and carry
                  out computational analysis to test hypotheses.
                </p>
                <p>
                  <em>FORMERLY MBB 101</em>
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">BIOL 101</a> (or
                  AP Biology)
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                BIOL 206 - Advanced Biostatistics
              </Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 206 - Advanced Biostatistics</h5>
                <p>
                  During Advanced Biostatistics, students will build on the
                  basic statistical skills they gained in Introductory
                  Biostatistics and learn to apply more advanced techniques to
                  real data. Students will also learn to read biostatistical
                  literature, which will build their ability to learn other
                  statistical techniques on their own. Students will learn a
                  variety of techniques that are frequently used by Biology
                  Faculty at Clark University, and so will enhance the skills
                  students have to effectively do research in the department.
                  Students will learn to do these statistics in the statistical
                  computing language R, which has become the standard in the
                  sciences for conducting complex statistical analysis. Students
                  will get the opportunity to analyze data generated in Clark
                  Biology laboratories to reinforce their learning and get
                  valuable hands-on experience doing statistics.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">BIOL 106</a> OR{" "}
                  <a href="#">GEOG 110</a>, or permission of the instructor
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  other fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>BIOL 209 - The Genome Project</Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 209 - The Genome Project</h5>
                <p>
                  The Genome Project offers students a unique opportunity to
                  directly apply the bioinformatics and comparative genomics
                  skills acquired during Introduction to Bioinformatics (MBB
                  101) in the analysis of a novel genome. Each year, students
                  will work collaboratively in small research teams to piece
                  together the entire DNA blueprint of an organism with no
                  existing reference genome. Students will evaluate and apply
                  genome assembly, gene prediction, functional annotation, and
                  variant discovery algorithms to better understand the genome
                  structure, and functional biology of sequenced organisms.
                  Analysis will be conducted within a LINUX environment through
                  the Clark University Supercomputing Cluster.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">BIOL 123</a> (or
                  MBB 101)
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> POP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>BIOL 216 - Ecology</Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 216 - Ecology</h5>
                <p>
                  Provides an overview of ecology as a scientific discipline.
                  The primary emphasis is on efforts to explain and predict the
                  distribution and abundance of organisms, how ecological
                  communities are composed and why they vary in time and space.
                </p>
                <p>
                  <strong>Prerequisites:</strong> BIOL 101 or BIOL 102 AND
                  Statistics (BIOL 106, ECON 160, PSYC 105 GEOG 110, SOC 202,
                  PSCI 107 or MATH 123)
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                BIOL 265 - Population Genetics
              </Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 265 - Population Genetics</h5>
                <p>
                  This course will focus on understanding how evolutionary
                  forces affect population diversity from a genetic perspective.
                  We will explore how to differentiate between selection and
                  genetic drift, learn to calculate rates of genetic diversity
                  between and across populations and study the variation in
                  populations as driven by time by studying examples from
                  primary and secondary literature.
                </p>
                <p>
                  <strong>Prerequisites:</strong>
                  <a href="#">BIOL 105</a> and <a href="#">BIOL 118</a>{" "}
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall, Bi-annually
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                BIOL 284 - Data Visualization and Exploration for the
                Biosciences in the Tidyverse
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  BIOL 284 - Data Visualization and Exploration for the
                  Biosciences in the Tidyverse
                </h5>
                <p>
                  This course serves as a guide to exploring and communicating
                  biological data. Data visualization is a key component of
                  understanding experimental data. Introductory Biostatistics
                  provides students with the tools to analyze and answer
                  questions about their data. This course provides students with
                  the knowledge to determine if they are asking the right
                  question or if they need to generate new hypotheses by
                  visualizing data. Students will learn the fundamental
                  components of statistical graphing focusing on the the grammar
                  of graphics outlined in the tidyverse.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">BIOL 106</a> or
                  Permission of instructor
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall annually.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "BCHEM") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                CHEM 101 - Introductory Chemistry I
              </Accordion.Header>
              <Accordion.Body>
                <h5>CHEM 101 - Introductory Chemistry I</h5>
                <p>
                  This course is designed to meet the needs of science majors
                  with an interest in chemistry, biochemistry, biology, or
                  environmental science and students with an interest in the
                  health professions. It will introduce students to fundamental
                  chemical concepts dealing with the structure, bonding, and
                  reactivity of molecules. Major topics include thermochemistry,
                  ideal gas theory, chemical periodicity, and bonding and
                  geometry of molecules. The laboratory sections introduce
                  students to the techniques of chemical experimentation and the
                  methods of chemical analysis needed for chemistry and other
                  sciences. Knowledge of high-school algebra is necessary;
                  high-school chemistry and physics are helpful, but not
                  required. Registration includes a pre-lecture meeting time one
                  day a week.Must register for one laboratory section.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> SP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                CHEM 102 - Introductory Chemistry II
              </Accordion.Header>
              <Accordion.Body>
                <h5>CHEM 102 - Introductory Chemistry II</h5>
                <p>
                  Continues <a href="#">CHEM 101</a> with a discussion of
                  thermodynamics, equilibrium theory, kinetics, electrochemistry
                  and the application of such theories to studies of structure
                  and reactivity of molecules. The laboratory studies
                  experimental techniques related to the lecture material.
                  In-class and final exams, laboratory reports and quizzes.
                </p>
                <p>
                  <strong>Prerequisites: </strong>
                  <a href="#">CHEM 101</a> or advanced placement.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> SP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered in spring
                  every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                CHEM 131 - Organic Chemistry Principles
              </Accordion.Header>
              <Accordion.Body>
                <h5>CHEM 131 - Organic Chemistry Principles</h5>
                <p>
                  This course introduces students to the chemistry of
                  carbon-based molecules. This family of molecules is broad and
                  diverse, as it includes the molecules of natural biochemistry,
                  synthetic materials, modern medicine, nutrition, and much
                  more. Major topics include foundational knowledge of molecular
                  structures, observable properties, analytical methods,
                  chemical reactivity, and the relationships between these
                  topics. As an intermediate-level natural science course, this
                  course challenges students to become stronger thinkers and
                  stronger students by improving their analytical and critical
                  thinking skills and by becoming more proactive and engaged as
                  learners. The course includes a weekly lab period.
                </p>
                <p>
                  <strong>Prerequisites::</strong> <a href="">CHEM 102 </a>,
                  <a href="">CHEM 103</a> or advanced placement).
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                CHEM 140 - Analytical Chemistry
              </Accordion.Header>
              <Accordion.Body>
                <h5>CHEM 140 - Analytical Chemistry</h5>
                <p>
                  This course introduces modern methods of quantitative
                  analysis. Topics include UV-Vis spectroscopy, fluorescence
                  spectroscopy, electrochemistry, separation methods,
                  experimental error and uncertainty, acid-base equilibria, and
                  fundamental analytical laboratory techniques. Must register
                  for lab.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="">CHEM 102 </a>or{" "}
                  <a href="">CHEM 103</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> n\a
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                CHEM 279 - Computer Biochemistry
              </Accordion.Header>
              <Accordion.Body>
                <h5>CHEM 279 - Computer Biochemistry</h5>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">BCMB 271</a> (not
                  counted toward the data science major), which in turn requires{" "}
                  <a href="#">BIOL 101</a> and <a href="#">BIOL 102</a>{" "}
                  (eligible as data science electives, not for this track) and{" "}
                  <a href="#">CHEM 131</a> (elective for this track)).
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype === "CS") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                CSCI 122 - Introduction to Discrete Structures
              </Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 122 - Introduction to Discrete Structures</h5>
                <p>
                  This course introduces the fundamentals of discrete structures
                  that are essential for computer science and related
                  disciplines such as data science. It follows the curriculum
                  guidelines on discrete structures developed by the governing
                  professional organizations ACM and IEEE. It serves students
                  who have taken college-level introductory courses in computing
                  and mathematics. Following the principles in our adopted
                  textbook, we aim to achieve breadth rather than depth, to
                  teach mathematical reasoning as well as concepts and skills,
                  and to help students learn to think and prove formally and
                  precisely.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">CSCI 120</a> and{" "}
                  <a href="#">MATH 119</a> or <a href="#">MATH 120</a> or{" "}
                  <a href="#">MATH 124</a>{" "}
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> varies.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header> CSCI 160 - Algorithms</Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 160 - Algorithms</h5>
                <p>
                  Emphasizes how the design of algorithms is supported by
                  advanced data structures such as sets, trees, and graphs.
                  Applications to searching and sorting are discussed. Topics
                  include: design and analysis of algorithms, general trees,
                  balanced trees, priority queues, hash tables, merge-sort,
                  quick-sort, radix sorting and searching, and elementary graph
                  algorithms. Programming projects are assigned for the
                  laboratory component.
                </p>
                <p>
                  <strong>Prerequisites:</strong> for this course require a
                  grade of C- or better in (<a href="#">CSCI 121</a> or{" "}
                  <a href="#">CSCI 124</a> ) and (<a href="#">MATH 114</a> or{" "}
                  <a href="#">CSCI 122</a>)
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> NA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                CSCI 210 - Artificial Intelligence
              </Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 210 - Artificial Intelligence</h5>
                <p>
                  Focuses on the fundamental ideas of artificial intelligence.
                  Topics include knowledge representation schemes, problem
                  representation through explicit models, search techniques,
                  analogy and pattern recognition, natural language parsing,
                  planning, and machine learning. Students implement the above
                  ideas through computer programs written in Python. Language
                  instruction is provided in Python (and/or Prolog), although no
                  prior knowledge of these programming languages is assumed.
                </p>
                <p>
                  <strong>Prerequisites::</strong> Prerequisites for this course
                  require a grade of C- or better in <a href="">CSCI 160</a>.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>CSCI 262 - Computer Vision</Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 262 - Computer Vision</h5>
                <p>
                  This course studies the fundamentals of computer vision and
                  its application to interdisciplinary problems. Students learn
                  about computer vision techniques to create computer systems
                  that analyze images automatically and determine what the
                  computer “sees”. The computer vision is then applied to
                  problems in Human-Computer Interaction, for example, to create
                  new interfaces for human users, or in biology or remote
                  sensing for geographic information systems. Students
                  investigate research methods and apply them to creating
                  video-based interactive systems. Students gain practical
                  experience designing, implementing, and testing a project.
                </p>
                <p>
                  <strong>Prerequisites:</strong> C- or better in CSCI 160
                  Algorithms
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> POP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                CSCI 250 - Software Engineering
              </Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 250 - Software Engineering</h5>
                <p>
                  Students consider the life cycle of large software projects,
                  beginning with the elicitation and definition of users’
                  requirements and continuing through software design,
                  documentation, coding, testing and maintenance. Topics
                  include: modularity, coupling, cohesion, transformational and
                  transactional structures and testing strategies. Working in
                  teams, students gain practical experience developing software
                  to solve concrete problems. Prerequisites for this course
                  require a grade of C- or better.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Prerequisites for this course
                  require a grade of C- or better in <a href="#">CSCI 160</a> or{" "}
                  <a href="#">CSCI 170</a>.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> POP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                CSCI 255 - Design and Analysis of Algorithms
              </Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 255 - Design and Analysis of Algorithms</h5>
                <p>
                  This course will provide a rigorous introduction to the design
                  and analysis of algorithms. It covers advanced data structures
                  and algorithms, design techniques such as divide-and-conquer,
                  dynamic programming, greedy algorithms, complete search and
                  reduction, algorithm analysis including correctness proof,
                  running time and memory space analysis, as well as
                  tractability issues such as NP-Completeness. Additional topics
                  may include randomized algorithms and approximation
                  algorithms.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">CSCI 160</a>,{" "}
                  <a href="#">CSCI 180</a> and <a href="#">MATH 125</a> a grade
                  of C- or better
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                CSCI 265 - Robotics and Intelligent Systems
              </Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 265 - Robotics and Intelligent Systems</h5>
                <p>
                  Embodied Situated Agents interact continuously with their
                  environment through a Sense-Think-Act cycle.Advancements in
                  electronics,embedded computing, and access to networks
                  engender increasingly sophisticated processes and computations
                  endowing them with the ability to sense, interpret, and act
                  upon the content of their environment.From traditional robots
                  to Internet of Things,growth in the volume of data and
                  computational power has enabled increasingly data-driven
                  approaches facilitating algorithms for autonomous
                  operation.Beginning with an introduction to considerations for
                  robot mechanism, sensor, actuator, hardware, and software,
                  this course covers computational approaches, tools, models and
                  methods that untimately employ data for the enablement of
                  autonomous decisionmaking.Course concepts will be reinforced
                  on a robot platform through an increasingly sophisticated
                  series of laboratory experiments.Students should be
                  comfortable with experimentation,interested in
                  reduction-to-practice of theoretical concepts, and have good
                  programming and general problem solving skills.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Prerequisites for this course
                  require a grade of C- or better. Algorithms (
                  <a href="#">CSCI 160</a>) and familiarity with matrix algebra
                  (<a href="#">MATH 130</a>), or instructor’s permission.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>CSCI 268 - Internet of Things</Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 268 - Internet of Things</h5>
                <p>
                  Internet of things (IoT) concerns the integration of people,
                  processes, and technology with connectable devices and sensors
                  to enable impactful applications including remote monitoring,
                  status, manipulation, and evaluation of trends. Advancements
                  in miniaturization and the proliferation of low-cost network
                  connected devices, sensors, and machines has seen the
                  expansion of impactful Internet of Things (IoT) applications
                  that have transformed a variety of domain areas from inventory
                  control and manufacturing to transportation. Consumer and
                  business driven applications lead IoT applications due to the
                  monetization of efficiencies afforded by the agility of
                  data-driven business decisions. IoT presents significant
                  opportunity for positive impact on quality of life and social
                  good.
                </p>
                <p>
                  <strong>Prerequisites:</strong>
                  <a href="#">CSCI 160</a>{" "}
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong>varies
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                CSCI 270 - Theory of Computation
              </Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 270 - Theory of Computation</h5>
                <p>
                  Studies the nature and formal models of computation (by
                  computers), its power and limitation (computability versus
                  uncomputability), the computational complexity of various
                  problems and the applications in logic and computer science.
                  Turing machines, general recursive functions and other
                  standard models of computation are introduced. Other aspects
                  of recursion theory, such as unsolvable problems and
                  recursively enumerable languages, are introduced. We also
                  address the more practical question, “What is an efficient
                  program?” in an introduction to modern complexity theory.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Prerequisites for this course
                  require a grade of C- or better <a href="#">CSCI 180.</a>
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> NA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                CSCI 220 - Database Management And Systems Design{" "}
              </Accordion.Header>
              <Accordion.Body>
                <h5>CSCI 220 - Database Management And Systems Design </h5>
                <p>
                  An advanced course on the realities of database technology.
                  Emphasizes the goals of database management: performance, data
                  integrity, future compatibility and versatility. The concept
                  of the data model is examined and a specific database is
                  discussed. Concentrates on database design and specification.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">CSCI 160.</a> (min
                  grade of C- required for prereq){" "}
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "ECO") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                ECON 010 - Economics and the World Economy
              </Accordion.Header>
              <Accordion.Body>
                <h5>ECON 010 - Economics and the World Economy</h5>
                <p>
                  This course provides an introduction to international economic
                  interactions and the macroeconomic analysis of economies. The
                  course develops basic economic concepts including market
                  analysis, trade, and demand and supply in the macroeconomy.
                  Comparisons across countries provide a deeper understanding of
                  business cycles, unemployment, monetary policy, economic
                  growth, currencies and fiscal policy. These economic concepts
                  provide tools to analyze current issues such as economic
                  stability, debt crises and policies towards trade. Open to
                  first-year students.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> GP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  semester
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                ECON 011 - Principles of Economics
              </Accordion.Header>
              <Accordion.Body>
                <h5>ECON 011 - Principles of Economics</h5>
                <p>
                  This course offers an introduction to microeconomics: the
                  analysis of firms, consumers and markets using economic
                  models. The first part of the course explains how individual
                  actors in the economy, both consumers and producers, make
                  economic decisions and how global economic conditions can
                  affect those decisions. The course then examines the
                  implications of those decisions for both competitive markets
                  and for markets where firms can influence prices or output
                  (such as monopoly). The course also helps students analyze the
                  trade-offs of government interventions in markets and
                  situations in which the free market fails to ensure the best
                  use of resources for a society and discusses possible
                  solutions.
                </p>
                <p>
                  <strong>Prerequisites:</strong>
                  <a href="#"> ECON 010</a>
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  semester
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                ECON 160 - Introduction to Statistical Analysis
              </Accordion.Header>
              <Accordion.Body>
                <h5>ECON 160 - Introduction to Statistical Analysis</h5>
                <p>
                  Examines basic concepts and techniques of statistical method
                  in economic analysis: descriptive statistics, probability
                  theory, sampling distributions, hypothesis testing and simple
                  and multiple regression.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">ECON 010</a>
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  semester
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                ECON 204 - Microeconomic Theory Using Calculus
              </Accordion.Header>
              <Accordion.Body>
                <h5>ECON 204 - Microeconomic Theory Using Calculus</h5>
                <p>
                  This course introduces students to a set of analytical tools
                  that economists developed to study the behavior of consumers
                  and firms and different market mechanisms. It starts with the
                  theories of the consumer and the producer, then examines
                  competitive market equilibrium, and finally discusses
                  situations in which efficient resource allocations cannot be
                  achieved in competitive markets. Interspersed with theory, the
                  course contains frequent examples that demonstrate the use of
                  microeconomics in solving problems faced by decision-makers in
                  both the private and public sectors. Concepts, techniques, and
                  results from Calculus are regularly used to facilitate
                  theoretical analysis. The main distinction of this course from
                  Econ 205 is the use of calculus.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">ECON 010</a>,{" "}
                  <a href="#">ECON 011</a>, and <a href="#">MATH 120</a> or{" "}
                  <a href="#">MATH 124</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Every year
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> n\a
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                ECON 206 - Macroeconomic Theory
              </Accordion.Header>
              <Accordion.Body>
                <h5>ECON 206 - Macroeconomic Theory</h5>
                <p>
                  Macroeconomics is one of the core elements of economics. The
                  subject includes the study of the determinants and behavior of
                  the aggregate economy, including income, employment, and the
                  price level. The economy is examined at a point in time
                  (statics) as well as over time (dynamics).
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">ECON 010</a> and{" "}
                  <a href="#">ECON 011</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                ECON 224 - Applied Game Theory
              </Accordion.Header>
              <Accordion.Body>
                <h5>ECON 224 - Applied Game Theory</h5>
                <p>
                  Game theory is the formal study of situations in which
                  individuals make decisions that will influence one another’s
                  welfare. It provides a set of analytical tools that are useful
                  for scholars in all branches of social sciences as well as for
                  practical decision-makers. This course offers an introduction
                  to game theory with an emphasis on its applications. It covers
                  applications in economics, business, political science,
                  sociology, international relations, psychology, biology, and
                  recreation. No prior knowledge of game theory is presumed and
                  the required mathematical background is minimal (high school
                  algebra and one course in calculus will be sufficient).
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">ECON 010</a>,{" "}
                  <a href="#">ECON 011</a>, and <a href="#">MATH 120</a> or{" "}
                  <a href="#">MATH 124</a> or instructor’s permission.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>ECON 265 - Econometrics</Accordion.Header>
              <Accordion.Body>
                <h5>ECON 265 - Econometrics</h5>
                <p>
                  This course deals with the application of statistical methods
                  to economics. The objective is to expose students to economic
                  model building, testing the model statistically, and applying
                  the model to practical problems in forecasting and analysis.
                  By understanding the theoretical and econometric basis of
                  equations, students gain proficiency in formulating,
                  estimating, and interpreting testable relationships on their
                  own.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">ECON 010</a>,{" "}
                  <a href="#">ECON 011</a>, and <a href="#">ECON 160</a>{" "}
                  (minimum grade of C- needed for <a href="#">ECON 160</a>)
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "EVS") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                BIOL 101 - Introduction to Biology I
              </Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 101 - Introduction to Biology I</h5>
                <p>
                  The goals of the two-semester biology introductory sequence
                  are: (1) to provide an understanding of the unifying themes in
                  modern biology, (2) to introduce the diversity of life at all
                  levels of organization, and (3) to illustrate the methods and
                  modes of scientific inquiry currently used in the biological
                  sciences. During the fall semester (BIOL 101), the focus is on
                  fundamental principles of evolution and genetics, whereas in
                  the spring (BIOL 102), the diversity of life, from cells to
                  organisms, is explored. The fall and spring courses do not
                  have to be taken in sequence but both are prerequisites for
                  all advanced courses in biology.
                </p>
                <p>
                  <strong>Corequisites:</strong> Must register for lab for{" "}
                  <a href="#">BIOL 101</a>.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> SP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                EN 101 - Environmental Science and Policy: Introductory Case
                Studies
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  EN 101 - Environmental Science and Policy: Introductory Case
                  Studies
                </h5>
                <p>
                  This course will ignite your interest in environmental science
                  and policy by engaging the urgent challenges of our times:
                  conserving forests, sustaining food systems, and responding to
                  climate change. We will ground our understanding of these
                  complex environmental issues through case studies of New
                  England and Ethiopia, as well as a location chosen by the
                  class. The course integrates biophysical and social sciences
                  with Indigenous and other place-based knowledge systems.
                  Throughout the semester, we read classic and cutting-edge
                  research papers, listen to podcasts, and watch short films. We
                  engage a wide range of perspectives through discussions, small
                  group activities, student presentations, and guest lectures.
                  While deepening our understanding of complex environmental
                  problems, we focus on solutions. Students learn to write
                  policy briefs that summarize scientific knowledge and evaluate
                  alternative policy options.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Annual - Fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                GEOG 104 - Earth System Science
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 104 - Earth System Science</h5>
                <p>
                  This course introduces the structure and function of the earth
                  system, with a focus on how the Earth system sustains life.
                  Topics include (1) connections among terrestrial surface,
                  oceans, and atmosphere and (2) how these connections create
                  and sustain climates, biomes, and ecosystem services.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> SP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                BIOL 206 - Advanced Biostatistics
              </Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 206 - Advanced Biostatistics</h5>
                <p>
                  During Advanced Biostatistics, students will build on the
                  basic statistical skills they gained in Introductory
                  Biostatistics and learn to apply more advanced techniques to
                  real data. Students will also learn to read biostatistical
                  literature, which will build their ability to learn other
                  statistical techniques on their own. Students will learn a
                  variety of techniques that are frequently used by Biology
                  Faculty at Clark University, and so will enhance the skills
                  students have to effectively do research in the department.
                  Students will learn to do these statistics in the statistical
                  computing language R, which has become the standard in the
                  sciences for conducting complex statistical analysis. Students
                  will get the opportunity to analyze data generated in Clark
                  Biology laboratories to reinforce their learning and get
                  valuable hands-on experience doing statistics.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">BIOL 106</a> OR{" "}
                  <a href="#">GEOG 110</a>, or permission of the instructor
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  other fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>BIOL 216 - Ecology</Accordion.Header>
              <Accordion.Body>
                <h5>BIOL 216 - Ecology</h5>
                <p>
                  Provides an overview of ecology as a scientific discipline.
                  The primary emphasis is on efforts to explain and predict the
                  distribution and abundance of organisms, how ecological
                  communities are composed and why they vary in time and space.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">BIOL 101</a> or{" "}
                  <a href="#">BIOL 102</a> AND Statistics (
                  <a href="#">BIOL 106</a>, <a href="#">ECON 160</a>,{" "}
                  <a href="#">PSYC 105</a>, <a href="#">GEOG 110</a>,{" "}
                  <a href="#">SOC 202</a>, <a href="#">PSCI 107</a>, or{" "}
                  <a href="#">MATH 123</a>)
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                GEOG 205 - Introduction to Hydrology
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 205 - Introduction to Hydrology</h5>
                <p>
                  Overview of what governs the hydrological cycle’s major
                  components of precipitation, evapotranspiration, soil
                  moisture, surface water, and groundwater. Core principles of
                  physical hydrology will be introduced including
                  rainfall-runoff processes, surface and subsurface storage and
                  flows, and land-atmosphere exchange. Students will also learn
                  about human influences on the water cycle, and consider
                  management of water resources at field to watershed scales.
                  Upon completion of this course, students will:
                </p>
                <ul>
                  <li>
                    Understand the essential elements of hydrological processes
                    and how these govern the distribution of water in the earth
                    system.
                  </li>
                  <li>
                    Be able to solve the surface water balance and analyze its
                    controls in different environments.
                  </li>
                  <li>
                    Have the basic skills needed to explore water resource
                    issues, such as quantitative understanding of the likelihood
                    of extreme rainfall and flooding events, flow directions and
                    rates in surface and ground waters, or land use/land cover
                    effects on hydrological processes.
                  </li>
                  <li>
                    Have new appreciation for fundamental tools and terms used
                    in the field of hydrology including mass balance,
                    steady-state, flux-gradient relations, continuity,
                    dimensional analysis, and probability.
                  </li>
                </ul>
                <p>
                  <strong>Recommended:</strong> <a href="#">GEOG 104</a> or{" "}
                  <a href="#">GEOG 102</a>. A background in one or more of the
                  following courses would also be helpful: physics (
                  <a href="#">PHYS 110</a>/<a href="#">PHYS 111</a>), calculus (
                  <a href="#">MATH 120</a>/<a href="#">MATH 121</a>), or
                  statistics (<a href="#">GEOG 110</a>). Three of the lab
                  sessions will require extended hours.
                </p>
                <p>
                  <strong>Prerequisites:</strong>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>GEOG 228 - Hydroclimatology</Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 228 - Hydroclimatology</h5>
                <p>
                  This course is a general introduction to climatology and the
                  interaction between earth’s climate and the hydrologic cycle.
                  We will emphasize the essential controls of weather and
                  climate, patterns and dynamics of the global climate
                  (including insolation, temperature, evapotranspiration,
                  precipitation, and atmospheric circulation), and the drivers
                  of climate and hydrologic change. We will examine large-scale
                  modes of climate variability (such as the El Niño-Southern
                  Oscillation), as well as hydroclimate extremes (droughts,
                  floods). Finally, the course will have a focus on developing a
                  deeper understanding of how climate data are collected,
                  analyzed, and disseminated, and how models have become
                  important tools to improve our understanding of these systems.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GEOG 104</a> or{" "}
                  <a href="#">GEOG 102</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Annually
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>GEOG 232 - Landscape Ecology</Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 232 - Landscape Ecology</h5>
                <p>
                  Considers the relationships between spatial patterns in
                  landscape structure (physical, biological and cultural) and
                  ecological processes. Role of ecosystem pattern in mass and
                  energy transfers, disturbance regimes, species’ persistence,
                  applications of remote sensing and GIS for landscape
                  characterization and modeling are examined. Prerequisite:{" "}
                  <a href="#">GEOG 190</a> - Introduction to Geographic
                  Information Science. <a href="#">GEOG 116</a> - Forest Ecology
                  is strongly recommended.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GEOG 190</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                GEOG 283 - Terrestrial Ecosystems and Global Change
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 283 - Terrestrial Ecosystems and Global Change</h5>
                <p>
                  Explores ecosystem responses to global environmental changes
                  and how they feedback on the earth system. Students will learn
                  about biophysical controls on energy, water, and carbon
                  cycles, and how biogeography, vegetation physiology, and local
                  to global climates influence surface-atmosphere exchanges,
                  which then feedback on biogeography and climate. The course
                  introduces the theory, remote sensing, and computational
                  modeling of biophysical, biogeochemical, and ecosystem
                  dynamical processes active in shaping the terrestrial
                  biosphere. Students will be exposed to methods of land surface
                  and ecosystem process modeling through computer tutorials with
                  numerical simulation, and will train some basics of writing
                  computer code. Can fulfill the Geography or Earth System
                  Science Capstone.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GEOG 104</a> or{" "}
                  <a href="#">GEOG 116</a> or <a href="#">GEOG 119</a> or{" "}
                  <a href="#">GEOG 205</a> or <a href="#">GEOG 232</a> or{" "}
                  <a href="#">GEOG 263</a> or <a href="#">BIOL 216</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "GD") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                GAME 025 - Game Design Fundamentals
              </Accordion.Header>
              <Accordion.Body>
                <h5>GAME 025 - Game Design Fundamentals</h5>
                <p>
                  This course serves to introduce the various aspects of game
                  design for those intending to work as part of management,
                  production, and/or design teams. The student will begin with
                  an analysis of gaming, with consideration of various
                  platforms, game genres, playability, objectives, rule
                  dynamics, and overall quality. Further, the student will learn
                  the elements of production including game conceptualization,
                  story development, and interface, character, and soundtrack,
                  and level design.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> AP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                GAME 190 - Game Programming with Data Structures
              </Accordion.Header>
              <Accordion.Body>
                <h5>GAME 190 - Game Programming with Data Structures</h5>
                <p>
                  This course focuses on the subject of game programming using a
                  third party 3D game engine to provide a uniform integration
                  for audio, 3D visuals, and device input. Students will learn
                  various data types, structures, and collections as well as
                  simple analysis of algorithms while developing with various
                  game libraries to be implemented in multi-platform engines
                  such as Unity and Unreal to produce platform independent code.
                  Students will also have the opportunity to interact with the
                  online game programming community to further develop their
                  skills.
                </p>
                <p>
                  <strong>Prerequisites:</strong>{" "}
                  <a href="#">GCPT 020 - Computer Programming C++</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                GCPT 220 - Data Analytics and Modeling in Games
              </Accordion.Header>
              <Accordion.Body>
                <h5>GCPT 220 - Data Analytics and Modeling in Games</h5>
                <p>
                  This course introduces students to strategies and
                  methodologies to design, implement, and utilize in-game data
                  collection points for analytics, statistics, and research data
                  gathering. We discuss data modeling, research data collection,
                  and data collection-design in relation to interactive media
                  specifically, where understanding the goals of the final game
                  analysis informs the development of the in-game collection as
                  well as the selection and evaluation of the resulting
                  datasets. Students will investigate and evaluate game title
                  case studies, create datasets, design game variable suites
                  based on research and model needs, while also learning how to
                  implement data collection in game software and analyze
                  collected data.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GAME 255</a> -
                  Game Studio or <a href="#">GAME 010</a> - History of Game
                  Development or <a href="#">CSCI 121</a> - Data Structures or{" "}
                  <a href="#">DSCI 125</a> - Introduction to Data Science or
                  Permission of the Instructor
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall and Spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>GAME 255 - Game Studio</Accordion.Header>
              <Accordion.Body>
                <h5>GAME 255 - Game Studio</h5>
                <p>
                  This course is to be taken by Game students enrolled in a Game
                  Studio: Art, Audio, Design, Production or Programming section.
                  The course is centered on an instructor guided project which
                  may include serious games, simulations, artistic
                  installations, entertainment, or new technological
                  exploration. The course will provide a hands-on development
                  environment for a formal interactive title to be released.
                  Students will gain experience working as part of a game studio
                  team with various departments, leads, development
                  infrastructure, and real-world demands. Students are required
                  to take this course multiple times during the course of their
                  degree program. May be repeatable for credit.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GAME 025</a> -
                  Game Design Fundamentals or <a href="#">GAME 030</a> -
                  Examining Play
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall & Spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                GAME 260 - Serious Game Project
              </Accordion.Header>
              <Accordion.Body>
                <h5>GAME 260 - Serious Game Project</h5>
                <p>
                  This course is the capstone course for the Context component
                  of the interactive media curriculum and is thematically
                  connected with the experience component. Students are required
                  to link their humanities and social science work with their
                  interactive media studies. Teams of students work on game
                  projects that are designed for a primary purpose other than
                  pure entertainment. The “serious” adjective generally refers
                  to applications that have been designed for use by industries
                  like defense, education, scientific exploration, health care,
                  emergency management, city planning, engineering, and
                  politics. These projects draw heavily on the outcomes students
                  have mastered as a result of their general education courses.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Two semesters of{" "}
                  <a href="https://catalog.clarku.edu/preview_course.php?catoid=32&coid=112540">
                    GAME 255
                  </a>{" "}
                  - Game Studio or Permission of the Instructor
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall & Spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                GAME 265 - Artificial Intelligence for Games
              </Accordion.Header>
              <Accordion.Body>
                <h5>GAME 265 - Artificial Intelligence for Games</h5>
                <p>
                  This course provides an overview of the field of artificial
                  intelligence with special attention to uses in the electronic
                  gaming field. Students will develop logic grids for
                  intelligent agents, discuss how learning and communication are
                  integral elements of artificial intelligence. Philosophical
                  discussion of such concepts as intelligence, cognition,
                  learning, and the Turing test will be addressed.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GCPT 020</a> -
                  Computer Programming C++ or <a href="#">CSCI 121</a> - Data
                  Structures
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>GAME 270 - Game Analytics</Accordion.Header>
              <Accordion.Body>
                <h5>GAME 270 - Game Analytics</h5>
                <p>
                  The course will discuss optimization of 3 phases of game
                  design development and production - marketing (how do we
                  acquire the users?), retention (how do we keep and convert
                  users to players?) and monetization (modeling the game changes
                  to get the optimal monetization). The course will also discuss
                  the Stochastic approach, introduce students to relational
                  databases, statistical software and other analytical tools
                  used in Game Analytics.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GAME 025</a> &{" "}
                  <a href="#">QBUS 110</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "GEO") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                GEOG 110 - Introduction to Quantitative Methods
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 110 - Introduction to Quantitative Methods</h5>
                <p>
                  Introduction to Quantitative Methods is an introductory course
                  in applied statistics with an emphasis on computer skills.
                  Students gain proficiency in using spreadsheets to organize
                  data and to perform the most common statistical methods such
                  as univariate analysis, hypothesis testing, estimation of
                  means, regression, and categorical association. Geography
                  majors receive credit for a skills course. Environmental
                  Science majors receive credit for a statistics course.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Prerequisites are high school
                  math such as Algebra 2 and/or pre-calculus.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Every Semester
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                GEOG 190 - Introduction to Geographic Information Science
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  GEOG 190 - Introduction to Geographic Information Science
                </h5>
                <p>
                  This course introduces Geographic Information Science (GIS) as
                  a powerful mapping and analytical tool. Topics include GISc
                  data structure, map projections, and fundamental GISc
                  techniques for spatial analysis. Laboratory exercises
                  concentrate on applying concepts presented in lectures and
                  incorporate two widely used GISc software packages - IDRISI
                  (created by Clarklabs) and ArcGIS (created by ESRI). These
                  exercises include examples of GISc applications in
                  environmental modeling, socio-demographic change, and site
                  suitability analyses. Although the course is
                  computer-intensive, no programming background is required. A
                  formal-analysis course. Counts as a skills course or core
                  course in mapping sciences/spatial analysis in geography
                  major.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  semester
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                GEOG 246 - Geospatial Analysis with R
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 246 - Geospatial Analysis with R</h5>
                <p>
                  Free and open source R is increasingly used for geospatial
                  analyses. R and its ecosystem of supporting software also
                  facilitate the creation, presentation, and reproducibility of
                  analyses. R is therefore very close to being a one-stop shop
                  for the modern GIScientist. This course will provide students
                  with the skills they need to use R as a GIS. There will be
                  additional emphases on programming, presentation, and
                  reproducibility, which will entail learning to develop R
                  libraries, development of presentations and reports using
                  Rmarkdown, and using version control with github. Students
                  will learn and apply R skills by working on a specific
                  research problem. Students should have prior programming
                  experience. Open to upper level undergraduate and graduate
                  students. Satisfies the Skills requirement or can count as a
                  specialization course in GIS in the undergraduate geography
                  and global environmental studies major/minor.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GEOG 190</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Annually
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                GEOG 247 - Intermediate Quantitative Methods in Geography
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  GEOG 247 - Intermediate Quantitative Methods in Geography
                </h5>
                <p>
                  Intermediate Quantitative Methods in Geography extends the
                  concepts of introductory statistics to multivariate
                  regression, principal components, spatial statistics, and
                  additional intermediate methods. The course uses the
                  Statistical Package for the Social Sciences (SPSS) software,
                  which works as a spreadsheet with dropdown menus. Students
                  learn how to select a method and interpret its output in a
                  practical manner that avoids common misconceptions. Students
                  apply the concepts to group projects based on student
                  interest.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Introductory statistics
                  course, such as <a href="#">GEOG 110</a> /{" "}
                  <a href="#">GEOG 311</a> Intro to Quantitative Methods, or
                  high school Advanced Placement Statistics
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                GEOG 260 - GIS & Land Change Models
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 260 - GIS & Land Change Models</h5>
                <p>
                  GIS & Land Change Models examines computerized models that
                  simulate land change. Such models are important because land
                  change influences socioeconomic development, biodiversity
                  conservation, water resources, energy use, greenhouse gases,
                  and many other factors. Examples are in Massachusetts to
                  extrapolate suburbanization and in the tropics to Reduce
                  Emissions due to Deforestation and Degradation (REDD).
                  Students learn fundamental concepts such as calibration,
                  extrapolation, validation, and sensitivity, along with
                  technical aspects of TerrSet’s Land Change Modeler and Geomod.
                  Students apply the concepts in group projects.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Prerequisite is Intro to GIS,
                  listed as <a href="#">GEOG 190</a> or <a href="#">IDCE 310</a>
                  .
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> POP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Every fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                GEOG 279 - GIS & Map Comparison
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 279 - GIS & Map Comparison</h5>
                <p>
                  GIS & Map Comparison investigates metrics that scientists use
                  and abuse focusing on applications to Remote Sensing and
                  Geographic Information Science with raster data. Methods
                  compare two variables of the same phenomenon, such as
                  comparison of an initial time versus a subsequent time, or
                  comparison of predictions versus observations. Students learn
                  how to compute and to interpret metrics such as Hits, Misses,
                  False Alarms, Mean Deviation, Mean Absolute Deviation, Area
                  Under the Total Operating Characteristic curve, among others.
                  Students apply and develop the concepts in group projects. The
                  professor wrote the book, literally.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Prerequisite is Intro to GIS,
                  listed as <a href="#">GEOG 190</a> or <a href="#">IDCE 310</a>
                  .
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA, POP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Every fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                GEOG 282 - Advanced Remote Sensing
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 282 - Advanced Remote Sensing</h5>
                <p>
                  Application of remote sensor systems in earth science and
                  other disciplines; interpretation of multispectral scanner,
                  RADAR and thermal imagery, classification, postclassification
                  analysis, special transformations, multitemporal data analysis
                  for change detection, the study of spectral characteristics of
                  vegetation, soils, water, minerals and other materials. The
                  specific objectives of the course are to acquaint the student
                  with the physical principles underlying remote sensing systems
                  and the primary remote-sensing data-collection systems;
                  introduce the student to methods of interpreting and analyzing
                  remotely sensed data; provide some insight concerning the
                  applications of remote sensing in various discipline areas;
                  and provide hands-on experience in digital image processing
                  using software packages available in the computer lab.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                GEOG 287 - New Methods in Earth Observation
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 287 - New Methods in Earth Observation</h5>
                <p>
                  Understanding the Earth System depends on observing
                  observations of socioeconomic and environmental patterns and
                  processes across multiple spatial and temporal scales. These
                  scales span seconds to decades in time, and centimeters to
                  millions of square kilometers in space. Earth Observation (EO,
                  also known as remote sensing) is the only feasible means for
                  providing this range of perspectives, but our ability to
                  collect data across all necessary scales is currently limited
                  by inherent tradeoffs between the extent, duration, frequency,
                  and resolution of observation. This suggests the possibility
                  that there may be important, but currently unknown, phenomena
                  that exist within our observational blind spots. Some of this
                  blindness is imposed by physics (there are only so many
                  photons reflected from the Earth, and these are proportional
                  to wavelength), but many are due to engineering or economic
                  constraints (some sensors are too expensive to use more than
                  once or over a large area). These latter hurdles are falling,
                  however, as new “big data” analytical techniques emerge, and
                  combine with increasingly available, high quality, low-cost
                  data made possible by a host of new innovations, including
                  cheap satellites, unmanned aerial systems, inexpensive
                  cellphone enabled field sensors, and the availability of a
                  large pool of internet-enabled workers who can interpret these
                  data in ways that computers cannot. This course provides
                  students hands-on experience working with these new EO
                  technologies.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GEOG 293</a>
                </p>
                <p>
                  <strong>Basic programming experience required.</strong>
                </p>
                <p>
                  <strong>Laptop required</strong>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Bi-annually
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                GEOG 293 - Introduction to Remote Sensing
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 293 - Introduction to Remote Sensing</h5>
                <p>
                  This course is designed to introduce the students to the
                  principles and analytical methods of satellite remote sensing
                  as applied to environmental systems (e.g., land-cover
                  classification, vegetation monitoring, etc.). Lectures will
                  cover principles of remote sensing, sensor types, as well as
                  the processing and analysis of multispectral satellite images
                  (e.g. Landsat and SPOT). A series of hands-on lab exercises
                  will complement students’ understanding of lecture material
                  and also helps students to become familiar with image
                  processing functions of the IDRISI image analysis software.
                  Particular emphasis will be placed on final group project that
                  brings a real world perspective to the learning process.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Vector GIS or Introduction to
                  GIS, and must register for Lab. Introduction to GISc and
                  Introduction to Quantitative Methods desirable.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                GEOG 296 - Advanced Raster GIS
              </Accordion.Header>
              <Accordion.Body>
                <h5>GEOG 296 - Advanced Raster GIS</h5>
                <p>
                  This course builds on Introduction to GIS by delving deeper
                  into raster GIS. Topics include time-series analysis,
                  uncertainty assessment, multi-objective decision making,
                  land-change modeling, and spatial statistics. Concepts in
                  lectures are illustrated using the Idrisi software. Final
                  project is required. This is a prerequisite for the fifth year
                  Masters program in GIS and is a requirement for the GISDE
                  masters program. Open to JRS & SRS.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">GEOG 190</a> or{" "}
                  <a href="#">IDCE 310</a> and <a href="#">GEOG 293/383</a>.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "MNG") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                MGMT 100 - The Art and Science of Management
              </Accordion.Header>
              <Accordion.Body>
                <h5>MGMT 100 - The Art and Science of Management</h5>
                <p>
                  This course is designed to encourage students to consider how
                  business is embedded into the larger society and how managers
                  solve problems. It will introduce students to basic management
                  skills and the context in which they are applied. For student
                  interested in management, entrepreneurship, finance, and
                  marketing, this required course provides an introduction to
                  the topics they will study in greater depth in their future
                  course work. For students not majoring in a management-related
                  discipline, it provides an opportunity to learn basic skills
                  that will be helpful in their current and future activities in
                  organizations. The course structure includes readings,
                  lecture, service learning, case analyses, role plays and
                  experiential exercises. The course involves considerable
                  interaction between the professor and students, and among
                  students, because the practice of management is about working
                  with, listening to, and respecting people who have different
                  backgrounds, experiences and opinions.
                </p>
                <p>
                  <strong>Prerequisites:</strong> VE Placement or{" "}
                  <a href="#">IDND 018</a>
                </p>
                <p>
                  <strong>Juniors and Seniors by permission only</strong>
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> VE
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                ACCT 101 - Principles of Accounting
              </Accordion.Header>
              <Accordion.Body>
                <h5>ACCT 101 - Principles of Accounting</h5>
                <p>
                  Presents the theory and techniques of financial accounting.
                  Teaches students an understanding of accounting information,
                  as a basis for financial statement analysis and decision
                  making, and the environment in which it is developed and used.
                  The course structure includes readings, lecture, discussions,
                  and problem solving. Topics include accrual basis accounting,
                  transaction analysis, accounting cycle, and preparation and
                  analysis of financial statements (income statement, balance
                  sheet, and statement of cash flows) for service, merchandising
                  and manufacturing companies. Students must also register for a
                  required discussion section with this course.
                </p>
                <p>
                  <em>*This class was formerly MGMT101.</em>
                </p>
                <p>
                  <strong>Prerequisites:</strong> This course is not recommended
                  for students to take during their first semester at Clark.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                BAN 104 - Introduction to Management Information Systems
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  BAN 104 - Introduction to Management Information Systems
                </h5>
                <p>
                  Information and communication technologies play an essential
                  role in organizations and society in today’s knowledge
                  economy. It is important for individual to possess a working
                  knowledge of the state-of-the-art information technology
                  tools, effective ways of using and developing of these tools,
                  and their impacts to individuals, organizations, and the
                  society. Introduction to Management Information System is an
                  introductory course that examines strategic, organizational,
                  technological, managerial as well as ethical issues that are
                  relevant to information systems. In addition, it provides
                  opportunity for students to learn and practice the most
                  popular software tools through hands-on applications.
                </p>
                <p>
                  Students must also register for a required discussion section
                  with this course.
                </p>
                <p>
                  <em>*This class was formerly MGMT104.</em>
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>FIN 240 - Corporate Finance</Accordion.Header>
              <Accordion.Body>
                <h5>FIN 240 - Corporate Finance</h5>
                <p>
                  This course is an introduction to the basic concepts,
                  principles, and analytical techniques of corporate finance.
                  The goal of the course is to help the student understand
                  financial markets and decisions made by financial managers.
                  Topics covered in this course include the time-value of money,
                  valuation of securities, valuation of corporate investments,
                  market efficiency, risk and return and capital structure. The
                  course focuses on the more practical application of these
                  topics, although important theories and models are to be
                  introduced to explain why the practical applications make
                  sense. The student will also learn how to make simple personal
                  finance decisions.
                </p>
                <p>
                  Most of the topics covered are based on quantitative analyses.
                  The student is expected to be competent in basic arithmetic
                  and algebra in order to do well in the course.
                </p>
                <p>
                  <em>
                    *This class was formerly MGMT240. Students who completed
                    MGMT240 should not take this class.
                  </em>
                </p>
                <p>
                  <strong>Prerequisites:</strong> FIN 142
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered annually
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                MKT 230 - Marketing Management
              </Accordion.Header>
              <Accordion.Body>
                <h5>MKT 230 - Marketing Management</h5>
                <p>
                  The main objective of this course is to introduce the basic
                  marketing principles from the perspective of a marketing
                  manager. Topics covered include the marketing concept, product
                  analysis, consumer behavior, channels of distribution,
                  pricing, promotion, services marketing, international
                  marketing, marketing planning, and the role of marketing in
                  society. The course also focuses on how the information
                  technology is impacting the field of marketing.
                </p>
                <p>
                  <strong>Prerequisites:</strong> This course is not recommended
                  for students to take during their first semester at Clark.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>MKT 231 - Marketing Research</Accordion.Header>
              <Accordion.Body>
                <h5>MKT 231 - Marketing Research</h5>
                <p>
                  The purpose of marketing research is to provide information
                  for making better business decisions. In this course, students
                  will be introduced to marketing research process and
                  techniques. This course will (a) provide students with the
                  necessary knowledge base and tools to conduct basic marketing
                  research and (b) develop students into the mindset of managers
                  and business leaders who can use marketing research to
                  generate business insights. The class focuses on qualitative
                  and quantitative aspects of marketing research as it relates
                  to business problems such as market segmentation, demand
                  assessment and new product design. The topics will include
                  research design, data collection procedures, sampling and data
                  analysis. The class will involve a combination of lectures,
                  readings, cases and computer-based exercises. The lectures
                  will focus on the introduction of marketing research process
                  and techniques; the readings and cases will involve class
                  discussions that help students understand the applications of
                  marketing research; and the computer-based lab exercises will
                  provide students with some “hands-on” experience with selected
                  marketing research techniques.
                </p>
                <p>
                  <strong>Prerequisites:</strong> QBUS 110 OR PSYC 105 OR ECON
                  160
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> POP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>MKT 234 - Consumer Behavior</Accordion.Header>
              <Accordion.Body>
                <h5>MKT 234 - Consumer Behavior</h5>
                <p>
                  Consumer Behavior is a course focused on the concepts that
                  create consumer demand for products and services and define
                  consumers choices for particular brands. Within the course,
                  students will discuss selected articles and videos that go
                  beyond the textbook to demonstrate current trends in consumer
                  buying behaviors in key market segments. Students will also
                  work as teams during the semester on a project to identify
                  marketing strategies to position brands for target consumer
                  segments.
                </p>
                <p>
                  <strong>Prerequisites:</strong> MKT 230
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>MKT 238 - Digital Marketing</Accordion.Header>
              <Accordion.Body>
                <h5>MKT 238 - Digital Marketing</h5>
                <p>
                  This course will provide a macro overview of Digital Marketing
                  including Display, Search, Affiliate, Email, Re-Targeting,
                  Social and Mobile. The course will also discuss how the rise
                  of the Internet has fundamentally changed how individuals and
                  organizations design, acquire and market goods and services
                  within the Digital Marketing ecosystem, specifically how
                  brands communicate with their audiences via Social Media.
                  Students will gain practical, real world techniques and
                  experiences discussed in class to complete a series of group
                  exercises and presentations. Student participation is a large
                  component of this class.
                </p>
                <p>
                  <strong>Prerequisites:</strong> MKT 230
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Annually
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                QBUS 110 - Quantitative Methods for Managers
              </Accordion.Header>
              <Accordion.Body>
                <h5>QBUS 110 - Quantitative Methods for Managers</h5>
                <p>
                  This course offers an introduction to the statistical analysis
                  processes and methods that can be used in managerial
                  decision-making. The course develops students’ abilities to
                  understand and perform basic data descriptions and
                  visualization to uncover patterns, relationships, and trends
                  in business-related data. Students also learn a variety of
                  statistical methods including probability theory, sampling
                  analysis, hypothesis testing, and regressions that can help
                  managers to effectively analyze business solutions and predict
                  outcomes. The course emphasizes the real-world applications of
                  the methods by giving students hands-on experience using MS
                  Excel.
                </p>
                <p>
                  <strong>Prerequisites:</strong> None
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                QBUS 250 - Operations Management
              </Accordion.Header>
              <Accordion.Body>
                <h5>QBUS 250 - Operations Management</h5>
                <p>
                  A study of the various techniques used to evaluate business
                  decisions, problems, and investment opportunities will be
                  covered within this course. Both qualitative and quantitative
                  issues will be discussed. Topics include linear programming,
                  learning curves, scheduling, forecasting, optimization, and
                  other contemporary analytic techniques. Using case studies,
                  students will gain a better understanding of management
                  decision-making process.
                </p>
                <p>
                  <strong>Prerequisites:</strong> MGMT 100 & QBUS 110
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                MGMT 260 - Applying the Art and Science of Management (Capstone)
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  MGMT 260 - Applying the Art and Science of Management
                  (Capstone)
                </h5>
                <p>
                  Applying the art and science of management focuses on the
                  actions and decisions of senior and middle level managers in
                  different types and sizes of organizations. Strategic
                  decisions at these levels consider all aspects of the
                  organization, both internal and external. These decisions are
                  being made in a complex environment of economic, social,
                  environmental, political, and legal forces, all affecting the
                  total enterprise. They also occur with pressures of
                  competition from other organizations operating in the same
                  industry. This capstone course links and further develops the
                  knowledge and skills learned in previous courses on specific
                  functional areas such as accounting, economics, finance,
                  management, marketing, and operations management. The course
                  introduces students to the concepts and tools used in
                  strategic management. Case studies and current events are used
                  to learn how to apply those concepts to managing
                  organizations.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Finance, Management, and
                  Marketing majors only; Seniors only.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered Annually
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>
                MKT 237 - Branding Concepts and Principles
              </Accordion.Header>
              <Accordion.Body>
                <h5>MKT 237 - Branding Concepts and Principles</h5>
                <p>
                  This class introduces the key concepts and principles of
                  branding as a critical part of the new business landscape.
                  These concepts will be delivered through cases, articles, and
                  global reviews of top brands in major product and service
                  segments. The delivery of content will rely on textbook
                  studies of branding, along with articles from business
                  magazines and other relevant sources. Brand management is
                  becoming more critical for both large and small organizations,
                  as corporate social responsibility and other issues become
                  larger components of consumer and business buying decisions.
                  This course covers ethics through the lens of establishing a
                  strong brand purpose that reflects the values and ethics of a
                  brand as part of the long-term value it delivers to its
                  customers and stakeholders.
                </p>
                <p>
                  <strong>Prerequisites:</strong> MKT 230
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Annually
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header>
                MGMT 210 - Management and Behavioral Principles
              </Accordion.Header>
              <Accordion.Body>
                <h5>MGMT 210 - Management and Behavioral Principles</h5>
                <p>
                  This course focuses on human behavior in an organizational
                  context. Topics include individual processes, interpersonal
                  relations, cross-cultural dynamics, team structure and
                  processes, organizational structure and design, and
                  organizational influences on behavior. Since the development
                  of managerial skills is best supported when students are given
                  the opportunity to understand and practice those skills, this
                  course emphasizes both theory and student experiences. A
                  variety of teaching/learning approaches will be used in class,
                  including self-assessment instruments, experiential exercises,
                  role-plays, and class discussions.
                </p>
                <p>
                  <strong>Prerequisites:</strong> Sophomores, Juniors, and
                  Seniors only.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> DI
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "MATH") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                MATH 123 - Introduction to Statistics
              </Accordion.Header>
              <Accordion.Body>
                <h5>MATH 123 - Introduction to Statistics</h5>
                <p>
                  Math 123 is a one-semester introduction to statistics. Topics
                  will include basic probability, discrete and continuous random
                  variables, the Central Limit Theorem, sampling distributions
                  for normal populations, confidence intervals, hypothesis
                  tests, the chi-squared test, and simple linear regression.
                  Students will use R software to explore these ideas on actual
                  data. Students will work with statistical models that occur in
                  the natural and social sciences.
                </p>
                <p>
                  <strong>Prerequisites:</strong>{" "}
                  <a href="#">MATH 120 - Calculus I</a>
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Each Semester
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>MATH 130 - Linear Algebra</Accordion.Header>
              <Accordion.Body>
                <h5>MATH 130 - Linear Algebra</h5>
                <p>
                  A requirement for mathematics and physics majors; highly
                  recommended for all computer-science majors. Topics include
                  systems of linear equations and their solutions, matrices and
                  matrix algebra, inverse matrices; determinants and
                  permutations; real n-dimensional vector spaces, abstract
                  vector spaces and their axioms, linear transformations; inner
                  products (dot products), orthogonality, cross products, and
                  their geometric applications; subspaces, linear independence,
                  bases for vector spaces, dimension, matrix rank; eigenvectors,
                  eigenvalues, matrix diagonalization. Some applications of
                  linear algebra will be discussed, such as computer graphics,
                  Kirchoff’s laws, linear regression (least squares), Fourier
                  series, or differential equations.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 121</a> or{" "}
                  <a href="#">MATH 125</a>
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                MATH 131 - Multivariate Calculus
              </Accordion.Header>
              <Accordion.Body>
                <h5>MATH 131 - Multivariate Calculus</h5>
                <p>
                  A continuation of calculus (<a href="#">MATH 120</a>,{" "}
                  <a href="#">MATH 121</a>, or <a href="#">MATH 124</a>,{" "}
                  <a href="#">MATH 125</a>). Multivariate calculus uses linear
                  algebra to extend the important concepts of single-variable
                  calculus to higher-dimensional settings. Topics include
                  scalar-valued and vector-valued functions, graphs, level sets,
                  limits and continuity; partial derivatives, gradients, tangent
                  planes, differentiability, total derivatives, directional
                  derivatives; paths, velocity, acceleration, arclength,
                  curvature, vector fields, divergence, curl; extrema, Hessians;
                  multiple integrals, change of variables, Jacobians; line
                  integrals, Green’s theorem; surface integrals, Stokes’
                  theorem, and Gauss’s theorem.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 121</a> or{" "}
                  <a href="#">MATH 125</a> or <a href="#">MATH 130</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                MATH 133 - Mathematical Modeling
              </Accordion.Header>
              <Accordion.Body>
                <h5>MATH 133 - Mathematical Modeling</h5>
                <p>
                  Mathematical models are fundamental for understanding,
                  predicting, and decision-making in almost every field. The
                  goal of this course is to enable students to build
                  mathematical models of real-world phenomena, analyze them, and
                  make predictions about their behavior. A variety of models
                  will be addressed with examples taken from natural and social
                  sciences such as biology, chemistry, economics, and physics.
                  Students are expected to actively engage in the modeling
                  process by showing understanding and questioning the models
                  constituents and extrapolating the presented examples to other
                  situations. This course is project based. By the end of this
                  course students are expected to present a report on their
                  project with a focus on describing the modeling procedure and
                  an analysis of the extent to which their model is accurate and
                  its limitations.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 121</a> -
                  Calculus II or <a href="#">MATH 125</a> - Honors Calculus II{" "}
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> POP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                MATH 210 - Introduction to Quantitative Finance
              </Accordion.Header>
              <Accordion.Body>
                <h5>MATH 210 - Introduction to Quantitative Finance</h5>
                <p>
                  This course is ideal for students who want a rigorous
                  introduction to finance. The course covers the following
                  fundamental topics: the time value of money, portfolio theory,
                  capital market theory, and security price modeling. We shall
                  dissect financial models by isolating their central
                  assumptions and conceptual building blocks, showing rigorously
                  how their governing equations and relations are derived, and
                  weighing critically their strengths and weaknesses.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 131</a> or
                  Permission
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  Periodically
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                MATH 217 - Probability and Statistics
              </Accordion.Header>
              <Accordion.Body>
                <h5>MATH 217 - Probability and Statistics</h5>
                <p>
                  An introduction to probability theory and mathematical
                  statistics that emphasizes the probabilistic foundations
                  required to understand probability models and statistical
                  methods. Topics covered will include the probability axioms,
                  basic combinatorics, random variables and their probability
                  distributions, mathematical expectation and common families of
                  probability distributions.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 130</a>,{" "}
                  <a href="#">MATH 131</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                MATH 218 - Topics in Statistics
              </Accordion.Header>
              <Accordion.Body>
                <h5>MATH 218 - Topics in Statistics</h5>
                <p>
                  The emphasis of this course is to develop the fundamental
                  statistical concepts of inference and hypothesis testing from
                  a classical perspective using the tools of probability theory.
                  Topics investigated include sampling and sample distributions,
                  graphical data analysis, point and interval estimation,
                  hypothesis testing and an introduction to Bayesian inference.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 217</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  other year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>MATH 219 - Linear Models</Accordion.Header>
              <Accordion.Body>
                <h5>MATH 219 - Linear Models</h5>
                <p>
                  A course in linear regression analysis which explores
                  statistical methods for modeling a linear functional
                  relationship between a response variable and one or more
                  predictor variables. First the underlying theory for simple
                  regression models involving one response and one predictor
                  variable is developed, and then the results are extended to
                  the case of one response variable and multiple predictor
                  variables (multiple regression). Underlying model assumptions
                  are explored and the implications of their violation. Besides
                  the development of the statistical theory, we will emphasize
                  the practical application of the theory to real world
                  examples.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 217</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                MATH 220 - Introduction to Stochastic Modeling
              </Accordion.Header>
              <Accordion.Body>
                <h5>MATH 220 - Introduction to Stochastic Modeling</h5>
                <p>
                  Stochastic processes considered in this course are collections
                  of random variables indexed by a time parameter. These
                  processes are used to model the dynamics of random events over
                  time. Our focus is on Markov chains in discrete and continuous
                  time, which form a widely used and relatively simple class of
                  stochastic processes. The Markov property basically says that
                  the future random behavior depends only on the current state
                  of the process, and not on its past. These processes are used
                  in a wide range of fields such as physics, chemistry,
                  information sciences, queuing theory, statistics, economics
                  and finance, social sciences, mathematical biology, and many
                  more. This course is not only well suited for math majors but
                  also for students in other fields with a background in
                  probability and an interest in modeling.
                </p>
                <p>
                  Poisson processes which model events that occur continuously
                  and independently of each other form a particular class of
                  continuous time Markov processes. Examples include such
                  diverse phenomena as the radioactive decay of atoms and
                  telephone calls arriving at a call center. The probability
                  distribution of the waiting time until the next occurrence of
                  an event in a Poisson process is an exponential distribution.
                  The generalization of waiting time to arbitrary distribution
                  leads to the notion of renewal processes, which are often more
                  realistic but harder to analyze. We will use these processes
                  to model problems in a variety of fields, depending on
                  students’ interests.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 217</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Every other Spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                MATH 244 - Differential Equations
              </Accordion.Header>
              <Accordion.Body>
                <h5>MATH 244 - Differential Equations</h5>
                <p>
                  Most ordinary differential equations occurring in mathematical
                  models of physical, chemical and biological phenomena cannot
                  be solved analytically. Numerical integrations do not lead to
                  a desired result without qualitative analysis of the behavior
                  of the equation’s solutions. This course studies the flows of
                  scalar and planar ordinary differential equations. Stability
                  and bifurcation are discussed.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 130</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  other year
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "PHY") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                PHYS 120 - Introductory Physics - Part I with Calculus
              </Accordion.Header>
              <Accordion.Body>
                <h5>PHYS 120 - Introductory Physics - Part I with Calculus</h5>
                <p>
                  Problem-oriented course intended for science majors; coverage
                  is more in-depth than <a href="#">PHYS 110</a>. Topics include
                  Newtonian mechanics and laboratory methods. Course should be
                  taken with <a href="#">MATH 124</a> so the elements of
                  calculus and its applications to physics can be treated at the
                  same time. This course comprises of lectures, associated
                  laboratories, and discussion sections.
                </p>
                <p>
                  <strong>Corequisites:</strong> <a href="#">MATH 120</a> or{" "}
                  <a href="#">MATH 124</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  fall.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                PHYS 121 - Introductory Physics - Part II with Calculus
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  PHYS 121 - Introductory Physics - Part II with Calculus
                </h5>
                <p>
                  A problem-oriented course based on electricity and magnetism
                  for science majors. This course includes hands-on activities,
                  computer-rich laboratories, group problem-solving and an
                  interactive environment. This course comprises of lectures,
                  associated laboratories, and discussion sections. Coverage is
                  more in-depth than <a href="#">PHYS 111</a>.
                </p>
                <p>
                  <strong>Corequisites:</strong> <a href="#">MATH 121</a> or{" "}
                  <a href="#">MATH 125</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  spring.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>PHYS 123 - Methods of Physics</Accordion.Header>
              <Accordion.Body>
                <h5>PHYS 123 - Methods of Physics</h5>
                <p>
                  This course covers the mathematical techniques needed for the
                  study of physics at the intermediate and advanced level.
                  Ordinary differential equations, vector calculus, partial
                  differential equations, matrices, Fourier series, and complex
                  variables.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 120</a> or{" "}
                  <a href="#">MATH 124</a> AND <a href="#">MATH 121</a> or{" "}
                  <a href="#">MATH 125</a>. Physics majors are strongly
                  encouraged to take this course during their sophomore year.
                  This is a required course for the Physics major.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  fall.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                PHYS 127 - Computer Simulation Laboratory
              </Accordion.Header>
              <Accordion.Body>
                <h5>PHYS 127 - Computer Simulation Laboratory</h5>
                <p>
                  Introduces object oriented programming and methods of computer
                  simulation and its diverse applications. The course is project
                  oriented, with students proceeding at their own pace. Projects
                  include planetary motion, chaotic systems, random systems,
                  complex systems, and thermal systems. Methods include the
                  numerical solution of differential equations, molecular
                  dynamics, and Monte Carlo techniques. Two laboratory sections
                  and two discussion periods per week.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">PHYS 120</a>,{" "}
                  <a href="#">MATH 120</a> or <a href="#">MATH 124</a>, or
                  instructor permission.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  year.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                PHYS 169 - Information Theory, Inference, and Networks
              </Accordion.Header>
              <Accordion.Body>
                <h5>PHYS 169 - Information Theory, Inference, and Networks</h5>
                <p>
                  This course will explore the basic concepts of Information
                  theory – a topic that lies at the heart of many exciting areas
                  of contemporary science and engineering – and its applications
                  to statistical inference and network theory. Topics covered in
                  the course include entropy as a measure of information, mutual
                  information, information transmission and communication
                  through noiseless or noisy channels, maximum likelihood
                  methods for data analysis, and neural network models. The
                  basic concepts developed will be applied to examples from a
                  wide range of academic fields such as data compression and
                  storage, biophysics, signal processing, neuroscience, machine
                  learning, and finance, where information theory can be related
                  to the theory of optimal investment in the stock market.
                  Finally we will discuss how methods from information theory
                  can be used to study and quantify interaction networks, a
                  subject that lies at the heart of the modern science of
                  complex systems.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 120</a> or{" "}
                  <a href="#">MATH 124</a>, and <a href="#">MATH 121</a> or{" "}
                  <a href="#">MATH 125</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Varied
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                PHYS 219 - Electronics Laboratory
              </Accordion.Header>
              <Accordion.Body>
                <h5>PHYS 219 - Electronics Laboratory</h5>
                <p>
                  Examines principles of modern electrical measurement and
                  control. Introduces DC- and AC-circuit theory and use of test
                  instruments such as multimeters and the oscilloscope.
                  Emphasizes electronic circuit design, operational amplifiers
                  and digital circuits. Two lectures and one laboratory each
                  week. Suitable for intermediate-level undergraduates and
                  graduate students in the sciences.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  other year
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                PHYS 243 - Technology of Renewable Energy
              </Accordion.Header>
              <Accordion.Body>
                <h5>PHYS 243 - Technology of Renewable Energy</h5>
                <p>
                  This course gives an overview of the technical issues
                  confronting the conversion of the world’s fossil fuel economy
                  to one where the major sources of energy are sustainable. The
                  pros and cons of major renewable energy sources (such as solar
                  and wind) will be discussed, along with some of the less
                  universal sources such as tides and geothermal, including, of
                  course, efficiency, the hidden energy resource. No discussion
                  of renewables is complete without a good understanding of the
                  electrical grid, which is central to the implementation of
                  renewable energy. The present grid is designed for a smaller
                  number of large generating stations and relatively constant
                  power generation and loads. The renewable grid will have many
                  smaller energy sources, as small as single solar panels on the
                  top of telephone poles, and also rapidly fluctuating sources,
                  as when winds gust through wind turbines, and clouds cover and
                  uncover solar panels. Through lecture and demonstration we
                  will learn how a nationwide energy network might work in the
                  future. This course is designed for science and non-science
                  majors alike, however math skills including algebra and
                  trigonometry will be expected.
                </p>
                <p>
                  Over the past two years a small microgrid consisting of solar
                  panels, a wind turbine, batteries, and LED lights has been
                  built at Clark. A main focus of this course will be on the
                  design and building of the microgrid, and related projects and
                  issues. This will require significant time, outside class, to
                  work on building the microgrid system. We will be building
                  physical systems, such as mounting solar panels and working to
                  connect electrical systems, in order to control and measure
                  the energy flows in our microgrid. We will need computer
                  programs for controlling the system and to analyze data, and
                  we also will need web pages for our own monitoring and in
                  order to display the system to others.
                </p>
                <p>
                  There will be a significant hands on component to this class,
                  in addition to regular homework assignments. Each student will
                  be expected to spend about three hours a week during an
                  afternoon, preferably Tuesday or Friday, working on the
                  project. Please consider this time commitment carefully when
                  you sign up for this course.
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> POP
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "PSY") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>PSYC 101 - General Psychology</Accordion.Header>
              <Accordion.Body>
                <h5>PSYC 101 - General Psychology</h5>
                <p>
                  Introduction to the principles of human behavior and to the
                  various sub-disciplines of Psychology. Students are required
                  to either participate in a psychology study or to read an
                  empirical article and write a short paper. No prerequisite.
                  Unless otherwise noted, this course is a prerequisite to all
                  other psychology offerings. Discussion attendance required.
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  semester
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>PSYC 105 - Statistics</Accordion.Header>
              <Accordion.Body>
                <h5>PSYC 105 - Statistics</h5>
                <p>
                  Introduction to descriptive and inferential statistics for the
                  social sciences. Discussion attendance required. Not
                  recommended for students in their first semester.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">PSYC 101</a>
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  semester
                </p>
                <p>
                  <strong>Placement Guidelines:</strong>
                </p>
                <ul>
                  <li>
                    Students must score 50% on Part 1 of the Math placement
                    prior to enrollment, and may take this placement exam a
                    maximum of two times.
                  </li>
                  <li>
                    Students scoring under 50% will be required to take a
                    refresher math course and pass with at least a “C” grade
                    before being able to enroll in PSYC 105.
                  </li>
                  <li>
                    (Contact the Psychology Department for a list of eligible
                    courses)
                  </li>
                  <li>
                    The math placement test can be found on Moodle under “My
                    Courses” then “Placement Tests.”
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                PSYC 108 - Experimental Methods in Psychology
              </Accordion.Header>
              <Accordion.Body>
                <h5>PSYC 108 - Experimental Methods in Psychology</h5>
                <p>
                  Presents the principles of the scientific method and methods
                  of experimental research in psychology. The relations between
                  experimental design and quantitative analyses are examined.
                  Students will participate in the design of an experimental
                  study including a search of relevant literature, the
                  collection of data and will submit a report of the experiment.
                  Discussion attendance required.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">PSYC 101</a>,{" "}
                  <a href="#">PSYC 105</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered every
                  semester
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                PSYC 200 - Lab in Program Evaluation
              </Accordion.Header>
              <Accordion.Body>
                <h5>PSYC 200 - Lab in Program Evaluation</h5>
                <p>
                  How does one know if new programs put in place are meeting the
                  stated goals? Leaders interested in strengthening the quality
                  of their programs and improve outcomes pertaining to human
                  development and learning often turn to program evaluation as a
                  valuable tool. Program evaluation provides insights into a
                  program’s effectiveness; evaluation data can be used both to
                  improve program services and individual learning. This course
                  is designed to provide psychology majors a first-hand
                  opportunity to participate in authentic research projects on
                  program evaluation. Methods will not be taught in a vacuum;
                  rather students will learn methods while working on ongoing
                  program evaluation. Students will receive training in all
                  phases, including formulating research questions, data
                  collection and analysis, project management and reporting for
                  actual users of our findings. Skills and experiences from this
                  Problems of Practice class are valuable for students who are
                  considering careers not only in psychology but also in fields
                  where applying psychology research is useful, including
                  educational settings, healthcare, human services, management,
                  and sales and marketing.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">PSYC 105</a>,{" "}
                  <a href="#">PSYC 108</a>, <a href="#">PSYC 109</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> varied
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                PSYC 201 - Lab in Social Psychology
              </Accordion.Header>
              <Accordion.Body>
                <h5>PSYC 201 - Lab in Social Psychology</h5>
                <p>
                  General principles of experimental design are learned through
                  the design and performance of original experiments in
                  experimental social psychology. This course covers various
                  topics in psychology, with a focus on violence and
                  nonviolence, intergroup relations, and power dynamics.
                  Students are also involved in lab experience and writing
                  research papers.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">PSYC 108</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                PSYC 202 - Lab in Developmental Psychology
              </Accordion.Header>
              <Accordion.Body>
                <h5>PSYC 202 - Lab in Developmental Psychology</h5>
                <p>
                  A general introduction to conceptual issues related to
                  research in the area of human development, with a particular
                  focus on how cultural context impacts these changes. Students
                  participate in group research projects involving observational
                  and experimental techniques, and receive training in all
                  phases of research, including formulating research questions,
                  data collection and analysis, and report writing.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">PSYC 105</a>,{" "}
                  <a href="#">PSYC 108</a>, and <a href="#">PSYC 109</a>
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Offered
                  periodically
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                PSYC 210 - Research on Ideology and Violence
              </Accordion.Header>
              <Accordion.Body>
                <h5>PSYC 210 - Research on Ideology and Violence</h5>
                <p>
                  This course provides undergraduate students with the
                  opportunity to conduct research in the Ideology and Intergroup
                  Violence Lab administered by professor Andrew L. Stewart.
                  Students in this course will be responsible for a variety of
                  research tasks, including, but not limited to, data
                  collection, data entry, data analysis, and scientific writing.
                  The Ideology and Intergroup Violence Lab conducts research
                  examining the etiology and prevention of intergroup violence,
                  particularly in gender, race, nationality, sexual orientation,
                  and other intergroup relations. This course may be repeatable
                  for credit.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">PSYC 105</a>,{" "}
                  <a href="#">PSYC 108</a>, and Permission
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Fall and Spring
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                PSYC 217 - Research in Family Interactions{" "}
              </Accordion.Header>
              <Accordion.Body>
                <h5>PSYC 217 - Research in Family Interactions </h5>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (atype == "ELE") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                DSCI 103 - Data, Computing and Society
              </Accordion.Header>
              <Accordion.Body>
                <h5>DSCI 103 - Data, Computing and Society</h5>
                <p>
                  Data in the 21st Century draws many parallels to Oil in the
                  18th Century, while its use is increasing, its applications
                  and full utility remain largely untapped. While limited in
                  usefulness it its raw form, substantial value arises from its
                  refining, that is the derivative forms from its processing,
                  mixture with other components, and its transformation. Such
                  processes on Data are purposed with gaining insights, nuggets
                  of information not directly observable. One finds achievement
                  of efficiencies engendered by the refining of data ranging
                  broadly across diverse domains from transportation and
                  commerce to entertainment and healthcare. More recently,
                  governments have employed data to improve apportionment of
                  funds and delivery of critical services. An organization’s
                  ability to employ data and use it to generate insights enables
                  better decision-making. In this course, we cover introductory
                  concepts purposed with building student background in the Data
                  Science process, that is posing questions, gathering data,
                  developing analyses, and articulating data-informed decisions.
                  We also introduce students to entry level computational tools
                  and methods purposed with extracting insights from data as we
                  survey the Data Science process and consider its impact.
                  Students will also be challenged to consider issues concerning
                  privacy, bias, and ethics surrounding data and crafting
                  data-informed decisions. A goal of the course is to expose
                  students to examples from varied domains.
                </p>
                <p>
                  <strong>Prerequisites:</strong> None
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA, DI
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Annually
                  (Depending of availability of faculty to teach it)
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>MATH 113 - Sports Analytics</Accordion.Header>
              <Accordion.Body>
                <h5>MATH 113 - Sports Analytics</h5>
                <p>
                  Math 113 is an introduction to Sports Analytics, a rapidly
                  growing discipline. The course focuses primarily on the NBA
                  and MLB, the pro basketball and baseball leagues in the U.S.
                  We will also include lecture topics on marathon running and
                  women’s professional tennis, and students may pursue any sport
                  in their final project. Our approach will be to understand
                  recently available advanced statistics and to build simple
                  models using R software. With this experience, we will make
                  data-driven evaluations and predictions in lectures and in
                  projects. A few additional topics will be presented such as
                  player development, in-game strategy, team building, and the
                  draft. The modeling techniques and software learned in this
                  course are general ones and could be applied to many other
                  fields such as medicine, politics, business, and science.
                </p>
                <p>
                  <strong>Prerequisites:</strong> <a href="#">MATH 120</a> -
                  Calculus I or Placement
                </p>
                <p>
                  <strong>Course Designation/Attribute:</strong> FA, FYI
                </p>
                <p>
                  <strong>Anticipated Terms Offered:</strong> Bi-Annually
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    }
  };
  const handleData = () => {
    if (type === "ADA") {
      return (
        <>
          <h5>DSCI 105 - Applied Data Analytics</h5>
          <br />
          <br />
          <p>
            An investigation into the fundamental techniques and practices of
            data analysis. The primary activities of the course will be a series
            of lectures and a corresponding series of lab sessions, programming
            projects, and written assignments. The course will focus on applying
            tools and techniques to practical problems of analysis,
            visualization, and discovery and will also introduce the student to
            a suite of modern tools for data analysis.{" "}
            <em>Formally DSCI 205.</em>
          </p>
          <p>Prerequisites for this course require a grade of C- or better.</p>
          <p>
            <strong>Prerequisites:</strong>
          </p>
          <ul>
            <li>
              <a href="http://example.com/GEOG110">GEOG 110</a> or{" "}
              <a href="http://example.com/ECON160">ECON 160</a> or{" "}
              <a href="http://example.com/SOC202">SOC 202</a> or{" "}
              <a href="http://example.com/PSYC105">PSYC 105</a> or{" "}
              <a href="http://example.com/PSCI107">PSCI 107</a> or{" "}
              <a href="http://example.com/QBUS110">QBUS 110</a> or{" "}
              <a href="http://example.com/MATH120">MATH 120</a> or{" "}
              <a href="http://example.com/MATH124">MATH 124</a> and{" "}
              <a href="http://example.com/CSCI120">CSCI 120</a> (Minimum grade
              of C- required for pre-reqs)
            </li>
          </ul>
          <p>
            <strong>Course Designation/Attribute:</strong> POP
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Spring
          </p>
        </>
      );
    }
    else if (type == "IDS") {
      return (
        <>
          <h5>DSCI 125 - Introduction to Data Science</h5>

          <p>
            The course introduces foundational statistical and computational concepts and skills in data-centered computing and applications. It provides hands-on opportunities for students to process and analyze real world datasets and extract information from the data. Social issues surrounding data science, such as data privacy, bias, fairness, and social impacts, will also be discussed.
          </p>
          <p>
            <strong>Prerequisites:</strong>{" "}
            <a href="http://example.com/CSCI120">CSCI 120</a> or{" "}
            <a href="http://example.com/CSCI124">CSCI 124</a> and{" "}
            <a href="http://example.com/MATH120">MATH 120</a> or{" "}
            <a href="http://example.com/MATH124">MATH 124</a> or{" "}
            <a href="http://example.com/GEOG110">GEOG 110</a> or{" "}
            <a href="http://example.com/ECON160">ECON 160</a> or{" "}
            <a href="http://example.com/SOC202">SOC 202</a> or{" "}
            <a href="http://example.com/PSYC105">PSYC 105</a> or{" "}
            <a href="http://example.com/PSCI107">PSCI 107</a> or{" "}
            <a href="http://example.com/QBUS110">QBUS 110</a> (minimum grade of C- required for pre-reqs)
          </p>
          <p>
            <strong>Course Designation/Attribute:</strong> POP
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Fall
          </p>
        </>
      );
    }
    else if (type == "MFDS") {
      return (
        <>
          <h5>DSCI 122 - Mathematical Foundations of Data Science</h5>
          <br />
          <br />
          <p>
            This course introduces fundamental mathematical concepts, theorems,
            and tools used in data science and machine learning, including
            linear algebra, analytic geometry, matrix decompositions, partial
            derivatives, optimization, and if time permits, probability and
            statistics. This is a standard lecture course with a lab component.
            The lab will be used for small group work and, if time permits,
            introduction to programming in R (one of the widely used programming
            languages in data science).
          </p>
          <p>
            <strong>Prerequisites:</strong>{" "}
            <a href="http://example.com/MATH121">MATH 121 - Calculus II</a> or{" "}
            <a href="http://example.com/MATH125">
              MATH 125 - Honors Calculus II
            </a>
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Fall
          </p>
        </>
      );
    } else if (type == "IC") {
      return (
        <>
          <h5>CSCI 120 - Introduction to Computing</h5>
          <p>
            Develops computational problem-solving skills through programming,
            and exposes students to a variety of other topics from computer
            science and its applications. The focus of the course is to learn
            fundamental computational concepts (information, algorithms,
            abstraction, and programming) that are central to computer science,
            and that also happen to be instrumental for the computational
            investigation of science. Design, analysis, and testing of
            problem-solving techniques are applied to a variety of domains
            across the sciences and liberal arts. This is the first course for
            computer science majors and anyone seeking a rigorous introduction.
            No prior knowledge of programming is required, but good analytical
            skills are helpful.
          </p>
          <p>
            <strong>Prerequisites:</strong> No prerequisites.
          </p>
          <p>
            <strong>Course Designation/Attribute:</strong> SP
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Offered every year
          </p>
        </>
      );

    } else if (type == "HCI") {
      return (
        <>
          <h5>CSCI 124 - Honors Introduction to Computing</h5>
          <p>
            This accelerated course provides a comprehensive introduction to computing and its diverse applications, equipping students with the fundamental principles and problem-solving techniques necessary to tackle real-world challenges. Student will learn programming in Python, grasping a systematic approach to problem formulation, algorithm design, code development and testing. This course includes a project component where students will demonstrate their newly acquired skills through the design and implementation of a project of their choice. Success in the course requires strong analytical skills and a dedicated work ethic.  Prior programming experience is not necessary but may be helpful.
          </p>
          <p>
            <strong>Prerequisites:</strong> Permission Only.
          </p>
          <p>
            <strong>Course Designation/Attribute:</strong> SP
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Offered every year
          </p>
        </>
      );
    }
    else if (type == "SC") {
      return (
        <>
          <h5>DSCI 216 - Stochastic Computing</h5>
          <p>
            This course is about dealing with uncertainty that appears in
            virtually all areas of data science and computer science. This will
            be accomplished with tools and techniques for its measurement,
            description, evaluation, and ultimately making decisions under
            uncertainty.
          </p>
          <p>
            The course will approach these goals using a three-fold approach,
            namely problem, theory, and prototype (PTP). We will motivate major
            topics by discussing a problem. The purpose of discussion of the
            problem is to give context behind why a particular supporting topic
            in probability was developed or what it is intended to address. The
            problem will be followed by theory. This concerns rigorous
            mathematical definition and tools for their manipulation in order to
            address the problem. Emphasis will be placed on approaches that are
            amenable to implementation. Finally, theory will be followed by
            prototype. The purpose of the prototype aspect of the course is to
            train students in the development of models that serve a useful
            purpose.
          </p>
          <p>
            <strong>Prerequisites:</strong>{" "}
            <a href="http://example.com/MATH121">MATH 121 - Calculus II</a> or{" "}
            <a href="http://example.com/MATH125">
              MATH 125 - Honors Calculus II
            </a>{" "}
            and{" "}
            <a href="http://example.com/CSCI121">CSCI 121 - Data Structures</a>{" "}
            or{" "}
            <a href="http://example.com/CSCI124">
              CSCI 124 - Honors Introduction to Computing
            </a>
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Fall 2021
          </p>
        </>
      );
    } else if (type == "AML") {
      return (
        <>
          <h5>DSCI 225 - Applied Machine Learning</h5>
          <p>
            An investigation into the fundamental techniques and practices of
            machine learning. The primary activities of the course will be a
            series of lectures and a corresponding series of lab sessions,
            programming projects, and written assignments. The course will focus
            on applying machine learning to practical problems in Data Science
            and will also introduce the student to some of the fundamental
            theory of machine learning. Prerequisites for this course require a
            grade of C- or better.
          </p>
          <p>
            <strong>Prerequisites:</strong>
            <a href="https://example.com/csci121">
              CSCI 121 - Data Structures
            </a>{" "}
            or
            <a href="https://example.com/csci124">
              CSCI 124 - Honors Introduction to Computing
            </a>{" "}
            and
            <a href="https://example.com/dsci105">
              DSCI 105 - Applied Data Analytics
            </a>{" "}
            or
            <a href="https://example.com/dsci125">
              DSCI 125 - Introduction to Data Science
            </a>{" "}
            and
            <a href="https://example.com/dsci122">
              DSCI 122 - Mathematical Foundations of Data Science
            </a>
            (Minimum grade of C- required for pre-reqs)
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Spring
          </p>
        </>
      );
    } else if (type == "ADL") {
      return (
        <>
          <h5>DSCI 215 - Applying Deep Learning to Earth Observation</h5>
          <p>
            Through an exploration of deep neural networks and their application
            to satellite imagery, this course will provide an in-depth look at
            how to leverage large, multi-dimensional datasets for predictive
            modeling. Examples will focus on environmental applications to
            satellite imagery, especially for mapping land cover and land use.
            Mathematical foundations required to acquire and prepare data for
            training deep neural networks will also be covered, as well as the
            ability to critically evaluate the resulting maps.
          </p>
          <p>
            The course will include hands-on experience with deep learning
            programming libraries, open source software and tools, and provide a
            solid foundation for students who wish to apply these methods for
            studies in geography and reproducible research.
          </p>
          <p>
            For DSCI students, this course satisfies the captstone requirement.
          </p>
          <strong>Prerequisites:</strong>
          <p>
            There are two sets of prerequisites, with the expectation that
            students have sufficient background in one area and, at minimum,
            have enough programming experience:
          </p>
          <ul>
            <li>
              One of <a href="https://example.com/csci121">GEOG 370</a>,{" "}
              <a href="https://example.com/csci121">GEOG 371</a>, or{" "}
              <a href="https://example.com/csci121">GEOG 373</a> with preference
              given to <a href="https://example.com/csci121">GEOG 370</a> or{" "}
              <a href="https://example.com/csci121">GEOG 371</a>
            </li>
            <li>
              And one of <a href="https://example.com/csci121">DSCI 100</a>,{" "}
              <a href="https://example.com/csci121">CPSC 110</a>, or{" "}
              <a href="https://example.com/csci121">CPSC 121</a>
            </li>
          </ul>
          <p>Can be satisfied through two approaches:</p>
          <ol>
            <li>
              <a href="https://example.com/csci121">GEOG 370</a> or{" "}
              <a href="https://example.com/csci121">GEOG 371</a> and{" "}
              <a href="https://example.com/csci121">DSCI 100</a> or{" "}
              <a href="https://example.com/csci121">CPSC 110</a> or{" "}
              <a href="https://example.com/csci121">CPSC 121</a>
            </li>
            <li>
              <a href="https://example.com/csci121">GEOG 373</a> and{" "}
              <a href="https://example.com/csci121">DSCI 100</a> or{" "}
              <a href="https://example.com/csci121">CPSC 110</a> or{" "}
              <a href="https://example.com/csci121">CPSC 121</a>
            </li>
          </ol>
          <p>
            Determination regarding whether prerequisites can be waived or
            satisfied by other means will be made on a case-by-case basis by the
            instructors.
          </p>
          <p>Anticipated Term(s) Offered: Annually</p>
        </>
      );
    } else if (type == "DSA") {
      return (
        <>
          <h5>CSCI 121 - Data Structures </h5>
          <br />
          <br />
          <p>
            A continuation of <a href="http://example.com/MATH121">CSCI 120</a>{" "}
            , with an emphasis on such topics as abstract data types,
            collections, and dynamic data structures such as linked lists,
            stacks, queues and binary trees. The usage and implementation of
            recursion is also discussed, as is the elementary analysis of
            algorithms. Approximately six programming projects are assigned as
            the laboratory component of the course. These projects entail the
            design and implementation of programs involving the topics mentioned
            above.
          </p>
          <p>
            <strong>Prerequisites:</strong>{" "}
            <a href="http://example.com/MATH121">CSCI 120</a> (min grade of C-
            required for prereq)
          </p>
          <p>
            <strong>Course Designation/Attribute:</strong> SC
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Offered every semester
          </p>
        </>
      );
    } else if (type == "MI") {
      return (
        <>
          <h5>MATH 120 - Calculus I</h5>
          <br />
          <br />
          <p>
            Calculus is essential for majors in biology, chemistry, computer
            science, economics, mathematics, physics, and environmental science
            and policy. Part I includes functions, limits, continuity,
            differentiation of algebraic and trigonometric functions, mean-value
            theorem and various applications. Part II includes Riemann sums and
            integrals, techniques and applications of integration, improper
            integrals, transcendental functions (logarithms, exponential
            functions and inverse trigonometric functions). sequences and
            series. Though not all results are derived rigorously, care is taken
            to distinguish intuitive arguments from rigorous proofs.
          </p>
          <p>
            <strong>Prerequisites:</strong> Prerequisite for Math 120:
            appropriate score on the mathematics placement test or passing grade
            in <a href="http://example.com/MATH121">MATH 119</a> <br />
            Prerequisite for Math 121: a passing grade in Math 120.
          </p>
          <p>
            <strong>Course Designation/Attribute:</strong> FA
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Offered every Fall and Spring
          </p>
        </>
      );
    } else if (type == "MII") {
      return (
        <>
          <h5>MATH 121 - Calculus II</h5>
          <br />
          <br />
          <p>
            See <a href="http://example.com/MATH121">MATH 120</a>.
          </p>
          <p>
            <strong>Prerequisites:</strong>{" "}
            <a href="http://example.com/MATH121">MATH 120 - Calculus I</a> or{" "}
            <a href="http://example.com/MATH121">
              MATH 124 - Honors Calculus I{" "}
            </a>
          </p>
          <p>
            <strong>Course Designation/Attribute:</strong> FA
          </p>
          <p>
            <strong>Anticipated Terms Offered:</strong> Offered every Spring
          </p>
        </>
      );
    }
  };
  return (
    <>
      <div className="major-bg-red">
        <Fade bottom duration={800}>
          <div className="text-center">
            <h1 className="h1-content">Major</h1>
            <p className="p-content">
              Immerse yourself in the dynamic and interdisciplinary field of
              Data Science with our comprehensive major program at Clark
              University, thoughtfully designed to equip students with a solid
              foundation and adaptable skills essential for navigating the
              rapidly evolving data landscape.
            </p>
          </div>
        </Fade>
      </div>
      <div className="container-fluid margin-top-40">
        <Fade bottom duration={1000}>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div class="line size-150px mg-bottom-28px"></div>
              <h2 class="display-data">About the Major Program</h2>
              <br />
              <p
                className="p-content"
                style={{
                  color: "#333333",
                  textAlign: "justify",
                  fontSize: "17px",
                }}
              >
                Clark offers a large variety of academic programs and supports
                students to pursue their interests through combinations of
                majors and minors in their chosen fields. Furthermore, our
                student clubs and growing data science alumni community provide
                enrichment activities, mentoring and networking opportunities.
                Our Data Science major comprises 8 units of core coursework
                covering key topics in data science and foundations in
                mathematics and computer science, ensuring every student
                acquires a robust base of general knowledge and skills
                applicable across various disciplines.{" "}
                <br />
                <br /> Beyond the core courses,
                the program offers a wide selection of electives, requiring
                students to complete required elective units. This flexibility allows
                students to select courses that align with their interests and
                career aspirations. As part of their elective choices, students
                must choose one of the distinct tracks available, each requiring at least
                four courses, including one advanced course at the 200-level.
                These tracks complement the core curriculum and enable students
                to develop domain-specific knowledge necessary for effectively
                applying data science. {" "}
                <br />
                <br />Our interdisciplinary approach not
                only ensures that students gain a deep understanding of both
                theoretical and practical aspects but also fosters collaboration
                among faculty and student across various disciplines. Whether
                your interest lies in pursuing graduate studies or applying data
                science to fields such as health informatics, financial
                analytics, or environmental science, our program paves the way
                for you to become a proficient and insightful data science
                professional.{" "}
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </Fade>
      </div>
      <div className="container-fluid margin-top-40">
        <Fade bottom duration={1000}>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div class="line size-150px mg-bottom-28px"></div>
              <h2 class="display-data">Explore Core Courses</h2>
              <br />
              <p
                className="p-content"
                style={{
                  color: "#333333",
                  textAlign: "justify",
                  fontSize: "17px",
                }}
              >
                Clark University's Data Science program include statistical
                analysis, machine learning, data visualization, and programming.
                These foundational classes ensure students develop essential
                skills to tackle real-world data challenges effectively
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </Fade>
      </div>
      <div className="container my-5">
        <div className="row mb-4"><h4>Data Science Core courses</h4></div>
        <div className="row">
          <div className="col-md-4">
            <CardDesign pop={true} title={'DS105 - Applied Data Analytics'} content={'An investigation into the fundamental techniques and practices of data analysis, this course focuses on applying tools and techniques to practical problems of analysis, visualization, and discovery.'} image={ADA} onhandleClick={() => {
              setType("ADA");
              handleShow();
            }} />
          </div>
          <div className="col-md-4">
            <CardDesign pop={false} title={'DSCI 122 - Mathematical Foundations of Data Science'} content={'This course provides an introduction to the key mathematical principles underlying data science. The course focuses on linear algebra, probability, statistics, and calculus, as these areas are crucial for understanding.'} image={MFDS} onhandleClick={() => {
              setType("MFDS");
              handleShow();
            }} />
          </div>
          <div className="col-md-4">
            <CardDesign pop={false} title={'DSCI 125 - Introduction to Data Science'} content={'This course provides foundational knowledge in statistical and computational concepts essential for data-centered computing and its applications.'} image={IDS} onhandleClick={() => {
              setType("IDS");
              handleShow();
            }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <CardDesign pop={false} title={'DSCI 215 - Applying Deep Learning to Earth Observation'} content={' Applying Deep Learning to Earth Observation delves into the application of deep learning techniques to analyze and interpret data from Earth observation systems.'} image={ADLE} onhandleClick={() => {
              setType("ADL");
              handleShow();
            }} />
          </div>
          <div className="col-md-4">
            <CardDesign pop={true} title={'DSCI 216 - Stochastic Computing'} content={'Stochastic Computing focuses on addressing the uncertainty inherent in data science and computer science through a combination of problem analysis, theoretical development, and prototype creation.'} image={SC} onhandleClick={() => {
              setType("SC");
              handleShow();
            }} />
          </div>
          <div className="col-md-4">
            <CardDesign pop={false} title={'DSCI 225 - Applied Machine Learning'} content={' Applied Machine Learning explores the fundamental techniques and practices of machine learning through a series of lectures, lab sessions, programming projects, and written assignments.'} image={AML} onhandleClick={() => {
              setType("AML");
              handleShow();
            }} />
          </div>
        </div>
        <div className="row mb-4"><h4>Computer Science Core courses</h4></div>
        <div className="row">
          <div className="col-md-4">
            <CardDesign pop={true} title={'CSCI 120 - Introduction to Computing'} content={' Introduction to Computing is a foundational course designed to develop computational problem-solving skills through programming while introducing students to various essential topics in computer science.'} image={HCI} onhandleClick={() => {
              setType("IC");
              handleShow();
            }} />
          </div>
          <div className="col-md-4">
            <CardDesign pop={false} title={'CSCI 121 - Data Structures'} content={'Data Structures provides a comprehensive introduction to the fundamental data structures used in computer science. The course covers a range of data structures including arrays, linked lists, stacks, queues, trees, and graphs.'} image={DS} onhandleClick={() => {
              setType("DSA");
              handleShow();
            }} />
          </div>
          <div className="col-md-4">
            <CardDesign pop={false} title={'CSCI 124 - Honors Introduction to Computing'} content={'Honors Introduction to Computing is an accelerated course that provides a comprehensive introduction to computing and its diverse applications.'} image={IC} onhandleClick={() => {
              setType("IC");
              handleShow();
            }} />
          </div>
        </div>
        <div className="row mb-4"><h4>Mathematics Core courses</h4></div>
        <div className="row">
          <div className="col-md-4">
            <CardDesign pop={true} title={'MATH 120/MATH 124  (Calculus I)'} content={'Calculus I is often the first course in a standard calculus sequence and typically covers topics such as limits,derivatives, and integrals. It is a foundational course for understanding calculus.'} image={MI} onhandleClick={() => {
              setType("MI");
              handleShow();
            }} />
          </div>
          <div className="col-md-4">
            <CardDesign pop={false} title={'MATH 121/MATH 125 (Calculus II)'} content={'Calculus II, typically referred to as MATH 121, is the second course in a standard calculus sequence. It builds upon the concepts introduced in Calculus I, such as limits, derivatives, and integrals, and dives deeper into their applications and extensions.'} image={MII} onhandleClick={() => {
              setType("MII");
              handleShow();
            }} />
          </div>
        </div>
      </div>
      <div className="container-fluid margin-top-40">
        <Fade bottom duration={1000}>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div class="line size-150px mg-bottom-28px"></div>
              <h2 class="display-data">Explore Major Elective Tracks</h2>
              <br />
              <p
                className="p-content"
                style={{
                  color: "#333333",
                  textAlign: "justify",
                  fontSize: "17px",
                }}
              >
                The Data Science program at Clark University offers specialized
                tracks in Business Analytics, Computational Data Science, and
                Environmental Data Science. These tracks allow students to
                tailor their education to specific career goals and industry
                demands, enhancing their expertise in targeted areas of data
                science.
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </Fade>
      </div>
      <div className="container">
        <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
          <div class="tpn_card">
            <img src={Biology} class="w-100 mb-4" />
            <h5>Biology Track</h5>
            <p>
              Analyze biological data, study genetics.
              <br />
              <br />
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("BIO");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/javier-tabima-restrepo/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Javier
              </a>
            </div>
          </div>
          <div class="tpn_card">
            <img src={T2} class="w-100 mb-4" />
            <h5>Biochemistry Track</h5>
            <p>
              Merge data science with biochemistry research.
              <br />
              <br />
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("BCHEM");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/charles-jakobsche/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Charles
              </a>
            </div>
          </div>
          <div class="tpn_card">
            <img src={T3} class="w-100 mb-4" />
            <h5>Computer Science Track</h5>
            <p>
              Study algorithms, artificial intelligence, robotics, computer
              vision, theory, and more.
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("CS");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/li-han/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Li Han
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
          <div class="tpn_card">
            <img src={T4} class="w-100 mb-4" />
            <h5>Economics Track</h5>
            <p>
              Explore game theory, statistical analysis and other areas where
              economics and data science combine.
              <br />
              <br />
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("ECO");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/edouard-wemy/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Edouard
              </a>
            </div>
          </div>
          <div class="tpn_card">
            <img src={T5} class="w-100 mb-4" />
            <h5>Environmental Science Track</h5>
            <p>
              Utilize DS to and address environmental issues like climate
              change, pollution & conservation.
              <br />
              <br />
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("EVS");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/christopher-williams/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Christopher</a>
            </div>
          </div>
          <div class="tpn_card">
            <img src={T6} class="w-100 mb-4" />
            <h5>Game Design Track</h5>
            <p>
              Learn how to use data analysis to improve game mechanics, user
              experience, and overall game design.
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("GD");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/elliot-epstein/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Elliot
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
          <div class="tpn_card">
            <img src={T7} class="w-100 mb-4" />
            <h5>Geography Track</h5>
            <p>
              Gain the skills and experience in GIS and use data science to
              interpret what you find.
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("GEO");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/lyndon-estes/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Lyndon
              </a>
            </div>
          </div>
          <div class="tpn_card">
            <img src={T8} class="w-100 mb-4" />
            <h5>Management Track</h5>
            <p>
              Analyze business analytics for decision-making.
              <br />
              <br />
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("MNG");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/hamidreza-ahady-dolatsara/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Hamidreza
              </a>
            </div>
          </div>
          <div class="tpn_card">
            <img src={T9} class="w-100 mb-4" />
            <h5>Mathematics Track</h5>
            <p>
              Apply math to model sports, health, business.
              <br />
              <br />
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("MATH");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/michael-satz/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Michael
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
          <div class="tpn_card">
            <img src={T10} class="w-100 mb-4" />
            <h5>Physics Track</h5>
            <p>
              Analyze physical phenomena, develop simulations.
              <br />
              <br />
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("PHY");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/barbara-capogrosso-sansone/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Barbara
              </a>
            </div>
          </div>
          <div class="tpn_card">
            <img src={T11} class="w-100 mb-4" />
            <h5>Psychology Track</h5>
            <p>Study human behavior using data-driven approaches.</p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("PSY");
                }}
              >
                Explore
              </a>
              <a
                href="https://www.clarku.edu/faculty/profiles/andrew-stewart/"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Andrew
              </a>
            </div>
          </div>
          <div class="tpn_card">
            <img src={Biology} class="w-100 mb-4" />
            <h5>General Electives</h5>
            <p>
              Not Affiliated with Any Track
              <br />
              <br />
            </p>
            <div class="btn-container">
              <a
                href="javascript:;"
                class="btn tpn_btn"
                onClick={() => {
                  handleAccShow();
                  setAType("ELE");
                }}
              >
                Explore
              </a>
              <a
                href="#"
                class="faculty-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Primary Faculty Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{handleData()}</Modal.Body>
      </Modal>

      <Modal show={ashow} onHide={handleAccClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{handleAccData()}</Modal.Body>
      </Modal>
    </>
  );
};
export default Major;
