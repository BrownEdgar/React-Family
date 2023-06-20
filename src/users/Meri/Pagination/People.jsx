import React from "react";
import Person from "./Person";
import Slider from "react-slick";

export default function People() {
    const people = [
        {
            name: 'Joseph Connor',
            title: 'Best Man',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptate nisi vel, incidunt quia inventore. Eius id blanditiis adipisci? Praesentium iusto maxime rem suscipit quis rerum temporibus laboriosam saepe eum? Nobis hic molestiae odio fugiat illum et quae soluta dignissimos incidunt nulla accusamus quaerat, exercitationem reprehenderit officia possimus impedit animi pariatur velit ea molestias quas?',
            image:'/src/users/Meri/images/2.jpg',
            isAlighnStart: false
        },
        {
            name: 'Natalie Jones',
            title: 'Bridesmaid',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptate nisi vel, incidunt quia inventore. Eius id blanditiis adipisci? Praesentium iusto maxime rem suscipit quis rerum temporibus laboriosam saepe eum? Nobis hic molestiae odio fugiat illum et quae soluta dignissimos incidunt nulla accusamus quaerat, exercitationem reprehenderit officia possimus impedit animi pariatur velit ea molestias quas?',
            image:'/src/users/Meri/images/1.jpg',
            isAlighnStart: true
        },
        {
            name: 'Jane Connor',
            title: "Groom's Mother",
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptate nisi vel, incidunt quia inventore. Eius id blanditiis adipisci? Praesentium iusto maxime rem suscipit quis rerum temporibus laboriosam saepe eum? Nobis hic molestiae odio fugiat illum et quae soluta dignissimos incidunt nulla accusamus quaerat, exercitationem reprehenderit officia possimus impedit animi pariatur velit ea molestias quas?',
            image:'/src/users/Meri/images/4.jpg',
            isAlighnStart: false
        },
        {
            name: 'William Jones',
            title: "Bride's Father",
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptate nisi vel, incidunt quia inventore. Eius id blanditiis adipisci? Praesentium iusto maxime rem suscipit quis rerum temporibus laboriosam saepe eum? Nobis hic molestiae odio fugiat illum et quae soluta dignissimos incidunt nulla accusamus quaerat, exercitationem reprehenderit officia possimus impedit animi pariatur velit ea molestias quas?',
            image:'/src/users/Meri/images/3.jpg',
            isAlighnStart: true
        }
    ];
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
    return (
        <div className="container">
				<Slider {...settings}>
					{
						people.map((person, index) => (
							<Person
								key={index}
								name={person.name}
								title={person.title}
								description={person.description}
								image={person.image}
								isAlighnStart={person.isAlighnStart}
							/>
						))
					}

				</Slider>
           
        </div>
    )
}
