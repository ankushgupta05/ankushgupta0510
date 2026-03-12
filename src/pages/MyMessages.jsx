// MyMessages.jsx - View user's contact history

import { useNavigate } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import { useGetUserContactMessagesQuery } from '../services/UserAuthApi';

const MyMessages = () => {
  const navigate = useNavigate();
  const { access_token } = getToken();

  const { data, isLoading, isError, refetch } = useGetUserContactMessagesQuery(
    access_token,
    {
      skip: !access_token, // Skip query if no token
    }
  );

  if (!access_token) {
    navigate('/login', {
      state: {
        from: '/my-messages',
        message: 'Please login to view your messages',
      },
    });
    return null;
  }

  if (isLoading) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your messages...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-gray-900 text-white min-h-screen p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-red-300">
            <div className="flex items-center justify-between">
              <span>❌ Failed to load messages</span>
              <button
                onClick={refetch}
                className="ml-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded text-sm transition"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-900 text-white min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Contact Messages</h1>
              <p className="text-gray-400 text-sm">
                View all your sent messages
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-semibold transition"
            >
              + New Message
            </button>
          </div>
        </div>

        {/* Stats Card */}
        <div className="mb-6 p-4 bg-gray-800 rounded-xl border border-purple-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Messages Sent</p>
              <p className="text-3xl font-bold text-purple-400">
                {data?.count || 0}
              </p>
            </div>
            <div className="text-5xl">📧</div>
          </div>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {data?.messages?.length > 0 ? (
            data.messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-gray-800 rounded-xl p-5 border border-purple-900 hover:border-purple-700 transition"
              >
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-purple-400">
                      {msg.subject}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Message ID: #{msg.id}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                    {new Date(msg.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">From:</span>
                    <span className="text-gray-300">{msg.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Email:</span>
                    <span className="text-gray-300">{msg.email}</span>
                  </div>
                </div>

                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-gray-800 rounded-xl p-12 text-center border border-purple-900">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-400 text-lg mb-4">
                No messages sent yet
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-semibold transition"
              >
                Send Your First Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyMessages;