import React from 'react';
import Program from './program';
import { Fade } from 'react-reveal';

const UGProgram = () => {
    return (<>
        <div className=' bg-red'>
            <Fade bottom duration={800}>
            <div className='text-center'>
                <h1 className='h1-content'>Undergraduate Program</h1>
                <p className='p-content'>Learn data analysis, visualization, and machine learning through a blend of computer science, statistics, and domain knowledge. Graduates are equipped for diverse careers or further studies, with hands-on project experience.</p>
            </div>
            </Fade>
        </div>
        <div className='container-fluid margin-top-40'>
        <Fade bottom duration={1000}>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div class="line size-150px mg-bottom-28px"></div>
                    <h2 class="display-data">Learn about our Program</h2>
                    <br />
                    <p className='p-content' style={{color:'#4b5b70',textAlign:'justify',fontSize:'17px'}}>Data is everywhere. Our increasingly global and digitized world produces massive amounts
                        of data every day. Effectively managing and understanding data is essential to all
                        organizations, whether they are in the public, private, or nonprofit arenas. Data science and
                        analyticshelp organizations harness their data and use it to discover knowledge, identify
                        opportunities, and develop solutions, ultimately leading to smarter policies, more efficient
                        and equitable practices, better services, and more inclusive societies.<br/><br/>
                        Clark University’s Data Science program provides a comprehensive interdisciplinary
                        education that seamlessly integrates core data science, computer science, and mathematics
                        courses with specialized domain knowledge. The program is supported by many dedicated
                        faculty from diverse partner departments and schools, including Biology, Chemistry,
                        Computer Science, Economics, Environmental Science, Geography, Interactive Media,
                        Management, Mathematics, Psychology, Physics, and Sustainability and Social Justice.<br/><br/>
                        We consider Data Science a multifaceted discipline that aligns well with the principles of
                        liberal arts education. We emphasize critical thinking, problem-solving, creativity,
                        communication, and team collaboration skills alongside technical proficiency; and help
                        students develop these skills. In addition, Clark provides excellent opportunities for applying
                        and further enhancing students’ knowledge and skills. At our program, undergraduates have
                        opportunities to work as teaching assistants, research assistants, and participate in projects,
                        competitions, and conferences, frequently under faculty guidance and with funding
                        support.  </p>
                </div>
                <div className='col-md-2'></div>
            </div>
            </Fade>
        </div>
        <div className='container margin-top-40'>
            <Program />
        </div>
    </>
    )

}
export default UGProgram