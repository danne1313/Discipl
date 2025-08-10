import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, MapPin, Star, Trophy, SquareUser, IndianRupee, Target, Heart, Blocks } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Find Fitness Centers',
      description: 'Discover the best gyms and fitness centers in your area with detailed information and reviews.',
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Join Events',
      description: 'Participate in exciting fitness events, competitions, and community challenges.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Connect with Athletes',
      description: 'Build connections with like-minded fitness enthusiasts and professional athletes.',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Track Progress',
      description: 'Monitor your fitness journey with comprehensive tracking and achievement systems.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Discipl helped me find the perfect gym and connected me with amazing training partners. My fitness journey has never been better!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Professional Athlete',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The events platform on Discipl is incredible. I\'ve participated in multiple competitions and met so many great athletes.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Yoga Instructor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'As an instructor, Discipl has been invaluable for promoting my classes and connecting with students.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-secondary-600/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your
              <span className="text-accent-300"> Fitness Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Connect with the best fitness centers, join exciting events, and achieve your health goals 
              with our comprehensive sports and wellness platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/fitness-directory"
                className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all duration-200 transform hover:scale-105"
              >
                Explore Centers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/30"
              >
                View Events
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Fitness Centers' },
              { number: '10K+', label: 'Active Members' },
              { number: '200+', label: 'Monthly Events' },
              { number: '50+', label: 'Cities Covered' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Everything You Need for Your Fitness Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From finding the perfect gym to joining competitive events, Discipl provides 
              all the tools you need to achieve your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Our Ecosystem
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Discipl is more than just a platform; it's a complete ecosystem designed to connect fitness enthusiasts, trainers, and sponsors. 
                Explore our apps tailored for different users:
              </p>
            </div>
            <div className="flex flex-row justify-evenly items-center gap-10 md:gap-20 flex-wrap lg:flex-nowrap">
                <div className="bg-white h-[25rem]  w-[20rem] p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-primary-600 mb-4"><Blocks className="h-12 w-12 text-secondary-600 mx-auto mb-3"/></div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 text-center">Mentor App</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Our mentor app is designed for fitness professionals to manage their clients, schedule sessions, and provide personalized training plans, all in one place.
                  </p>
                </div>
                <div className="bg-white h-[25rem] w-[20rem] p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-primary-600 mb-4"><SquareUser className="h-12 w-12 text-secondary-600 mx-auto mb-3"/></div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 text-center">User App</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Our user app provides a seamless experience for fitness enthusiasts to find gyms, join events, track their progress, and connect with trainers and other athletes.
                  </p>
                </div>
                <div className="bg-white h-[25rem] w-[20rem] p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-primary-600 mb-4"><IndianRupee className="h-12 w-12 text-secondary-600 mx-auto mb-3"/></div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 text-center">Sponsor App</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Our sponsor app allows businesses to connect with fitness enthusiasts, offering sponsorship opportunities for events and athletes.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Join thousands of satisfied members who have transformed their fitness journey with Discipl.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join Discipl today and discover a world of fitness opportunities, 
            connect with amazing people, and achieve your health goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm border border-white/30"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;