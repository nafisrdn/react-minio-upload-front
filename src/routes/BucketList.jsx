import { useState, useEffect } from "react";
import axios from "axios";
import { API_HOST, API_PORT } from "../config";
import MainLayout from "../components/Layouts/MainLayout";
import { Link } from "react-router-dom";

export default function BucketList() {
  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    getBuckets();
  }, []);

  async function getBuckets() {
    try {
      const res = await axios.get(`${API_HOST}:${API_PORT}/bucket`);
      console.log(res);
      const { data } = res;

      setBuckets(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MainLayout>
      <h1 className="mb-5">Bucket List</h1>

      <div className="list-group">
        {buckets.map((bucket, index) => (
          <Link
            to={`/bucket/${bucket.name}`}
            className="list-group-item list-group-item-action"
            key={index}
          >
            {bucket.name}
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
