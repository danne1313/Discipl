import React from 'react';
import { Target, Heart, Trophy, Users, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Goal Oriented',
      description: 'We help you set, track, and achieve your fitness goals with precision and dedication.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Community First',
      description: 'Building strong connections and fostering a supportive environment for everyone.',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Striving for the highest quality in everything we do, from services to experiences.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Inclusive',
      description: 'Welcoming people of all fitness levels and backgrounds to join our community.',
    },
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      bio: 'Former professional athlete with 10+ years in fitness industry leadership.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head of Community',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      bio: 'Certified fitness trainer and wellness coach with expertise in community building.',
    },
    {
      name: 'David Chen',
      role: 'Technology Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      bio: 'Tech enthusiast passionate about creating innovative fitness solutions.',
    },
    {
      name: 'Maria Garcia',
      role: 'Wellness Expert',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      bio: 'Nutritionist and holistic wellness advocate with 8+ years of experience.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Discipl</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Empowering individuals to achieve their fitness goals through community, 
              discipline, and comprehensive wellness solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                At Discipl, we're on a mission to revolutionize the fitness and wellness industry 
                by creating a comprehensive platform that connects people with the resources, 
                community, and motivation they need to succeed.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We believe that fitness is not just about physical strength – it's about building 
                mental resilience, creating lasting relationships, and developing the discipline 
                to achieve any goal you set your mind to.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary-50 rounded-lg">
                  <Globe className="h-12 w-12 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600">50+</div>
                  <div className="text-neutral-600">Cities</div>
                </div>
                <div className="text-center p-6 bg-secondary-50 rounded-lg">
                  <Award className="h-12 w-12 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600">5</div>
                  <div className="text-neutral-600">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Team working out"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These values guide everything we do and shape the experience we create 
              for our community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Discipl was born from a simple observation: the fitness industry was fragmented, 
              with great resources scattered across different platforms and communities operating 
              in isolation. Our founder, Alex Rodriguez, experienced this firsthand during his 
              transition from professional athletics to helping others achieve their fitness goals.
            </p>
            
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              In 2020, we launched with a vision to create a unified platform where fitness 
              enthusiasts, beginners, trainers, and facility owners could connect, share knowledge, 
              and grow together. What started as a local community initiative has now grown into 
              a comprehensive platform serving over 10,000 active members across 50+ cities.
            </p>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Today, Discipl continues to evolve, always staying true to our core mission of 
              empowering individuals to achieve their best selves through fitness, community, 
              and unwavering discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our diverse team of fitness professionals, technology experts, and community 
              builders are passionate about your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Be part of a community that's transforming lives through fitness, 
            discipline, and mutual support.
          </p>
          <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-50 transition-colors duration-200">
            Become a Member Today
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default About;