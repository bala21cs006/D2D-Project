import React from "react";
import { motion } from "framer-motion";
import { FiActivity } from "react-icons/fi";

const Activity = () => {

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.8,
      }}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
    >

      {/* Activity Header */}

      <div className="flex items-center gap-3 mb-6">

        <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
          <FiActivity size={20} />
        </div>

        <div>

          <h2 className="font-bold text-slate-800">
            Activity
          </h2>

          <p className="text-xs text-slate-400">
            Recent activity
          </p>

        </div>

      </div>


      {/* Activity List */}

      <div className="space-y-6">

        {[1, 2, 3].map((item, index) => (

          <motion.div
            key={item}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1 + index * 0.15,
            }}
            className="flex items-start gap-3"
          >

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className="w-2.5 h-2.5 mt-1.5 rounded-full bg-blue-500"
            />

            <div>

              <p className="text-sm text-slate-600">
                No recent activity
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Waiting for updates
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
};

export default Activity;