import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Tag, Search } from 'lucide-react';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: "Summer Fitness Challenge",
      description: "Join our 30-day summer fitness challenge and transform your body with daily workouts and nutrition guidance.",
      date: "2024-07-15",
      time: "09:00 AM",
      location: "Central Park Fitness Center",
      category: "Challenge",
      participants: 45,
      maxParticipants: 50,
      price: 29.99,
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Yoga & Meditation Workshop",
      description: "Experience inner peace and flexibility through our comprehensive yoga and meditation workshop led by certified instructors.",
      date: "2024-07-20",
      time: "06:00 PM",
      location: "Zen Wellness Studio",
      category: "Workshop",
      participants: 18,
      maxParticipants: 25,
      price: 45.00,
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "CrossFit Competition",
      description: "Test your strength and endurance in our monthly CrossFit competition. Prizes for top performers in each category.",
      date: "2024-07-25",
      time: "10:00 AM",
      location: "Iron Beast CrossFit",
      category: "Competition",
      participants: 32,
      maxParticipants: 40,
      price: 75.00,
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Nutrition & Meal Prep Seminar",
      description: "Learn the fundamentals of sports nutrition and meal preparation from professional dietitians and chefs.",
      date: "2024-08-02",
      time: "02:00 PM",
      location: "Healthy Living Center",
      category: "Seminar",
      participants: 22,
      maxParticipants: 30,
      price: 35.00,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Marathon Training Bootcamp",
      description: "Intensive 8-week marathon training program designed to prepare you for your first or next marathon race.",
      date: "2024-08-10",
      time: "07:00 AM",
      location: "Riverside Running Club",
      category: "Training",
      participants: 15,
      maxParticipants: 20,
      price: 120.00,
      image: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Dance Fitness Party",
      description: "High-energy dance fitness session combining popular music with fun choreography. All skill levels welcome!",
      date: "2024-08-15",
      time: "07:30 PM",
      location: "Move & Groove Studio",
      category: "Dance",
      participants: 38,
      maxParticipants: 45,
      price: 25.00,
      image: "https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Challenge': 'bg-red-100 text-red-800',
      'Workshop': 'bg-blue-100 text-blue-800',
      'Competition': 'bg-purple-100 text-purple-800',
      'Seminar': 'bg-green-100 text-green-800',
      'Training': 'bg-orange-100 text-orange-800',
      'Dance': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fitness <span className="text-red-500">Events</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
              Discover exciting fitness events, competitions, and workshops in your area
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-bold text-black">
              Upcoming Events
            </h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events by name, location, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
          </div>
          {searchTerm && (
            <div className="mt-4 text-gray-600">
              Found {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </div>
          )}
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No events found</h3>
              <p className="text-gray-500">
                {searchTerm ? `No events match "${searchTerm}". Try adjusting your search.` : 'No events available at the moment.'}
              </p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-lg font-bold text-red-500">${event.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-red-500" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-4 h-4 mr-2 text-red-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-red-500" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-4 h-4 mr-2 text-red-500" />
                      <span className="text-sm">{event.participants}/{event.maxParticipants} participants</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className="bg-red-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {Math.round((event.participants / event.maxParticipants) * 100)}% full
                    </span>
                  </div>
                  
                  <button className="w-full mt-4 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to suggest new events or create custom fitness experiences for your group
          </p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200">
            Suggest an Event
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default Events;