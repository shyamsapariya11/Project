import React from 'react';
import { Link } from "react-router-dom";

export const IplTeam = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-3">IPL Teams</h1>
      <p className="text-center text-muted">
        Click on any IPL team to view details.
      </p>

      {/* 🔥 IPL TEAM ROW */}
      <div className="tv-show-row mt-4">

        {/* CSK */}
        <Link to="/watch/Chennai Super Kings" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Chennai Super Kings</h5>
              <p className="card-text">Five-time IPL champions.</p>
            </div>
          </div>
        </Link>

        {/* MI */}
        <Link to="/watch/Mumbai Indians" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Mumbai Indians</h5>
              <p className="card-text">Most successful IPL franchise.</p>
            </div>
          </div>
        </Link>

        {/* RCB */}
        <Link to="/watch/Royal Challengers Bengaluru" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Royal Challengers Bengaluru</h5>
              <p className="card-text">Famous for passionate fans.</p>
            </div>
          </div>
        </Link>

        {/* KKR */}
        <Link to="/watch/Kolkata Knight Riders" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Kolkata Knight Riders</h5>
              <p className="card-text">Two-time IPL champions.</p>
            </div>
          </div>
        </Link>

        {/* RR */}
        <Link to="/watch/Rajasthan Royals" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Rajasthan Royals</h5>
              <p className="card-text">First IPL champions.</p>
            </div>
          </div>
        </Link>

        {/* SRH */}
        <Link to="/watch/Sunrisers Hyderabad" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Sunrisers Hyderabad</h5>
              <p className="card-text">Strong bowling attack.</p>
            </div>
          </div>
        </Link>

        {/* DC */}
        <Link to="/watch/Delhi Capitals" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Delhi Capitals</h5>
              <p className="card-text">Young and aggressive team.</p>
            </div>
          </div>
        </Link>

        {/* PBKS */}
        <Link to="/watch/Punjab Kings" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Punjab Kings</h5>
              <p className="card-text">Explosive batting lineup.</p>
            </div>
          </div>
        </Link>

        {/* GT */}
        <Link to="/watch/Gujarat Titans" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Gujarat Titans</h5>
              <p className="card-text">IPL champions in debut season.</p>
            </div>
          </div>
        </Link>

        {/* LSG */}
        <Link to="/watch/Lucknow Super Giants" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card tv-card">
            <div className="card-body">
              <h5 className="card-title">Lucknow Super Giants</h5>
              <p className="card-text">Consistent playoff contenders.</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}
